import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SmallSpin from '../Components/SmallSpin';
import { AuthUser } from '../Context/UserContext';

const AdminRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthUser)
    const location = useLocation();

    if (loading) {
        return <div className="  flex items-center justify-center">
            <SmallSpin />
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default AdminRoutes;