import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import loadingAmimation from '../assets/loading.json';
import { AuthUser } from '../Context/UserContext';

const PeivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthUser)
    const location = useLocation();

    if (loading) {
        return <div className="  flex items-center justify-center">
            <Lottie animationData={loadingAmimation} loop={true} />
        </div>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
};

export default PeivateRoute;