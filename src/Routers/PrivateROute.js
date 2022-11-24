import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SmallSpin from '../Components/SmallSpin';
import { AuthUser } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthUser)
    const location = useLocation();

    if (loading) {
        return <div className="  flex items-center justify-center">
            <SmallSpin />
        </div>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children

};

export default PrivateRoute;