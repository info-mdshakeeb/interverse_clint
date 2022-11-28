import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';
import { AuthUser } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthUser)
    const location = useLocation();

    if (loading) {
        return <div className="  flex items-center h-screen w-40 mx-auto">
            <LoadingSpinner />
        </div>
    }
    if (!user && !loading) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children

};

export default PrivateRoute;