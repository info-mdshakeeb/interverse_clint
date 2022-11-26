import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SmallSpin from '../Components/SmallSpin';
import { AuthUser } from '../Context/UserContext';
import useAdmin from '../Hooks/useAdmin';

const AdminRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthUser)
    const location = useLocation();
    const [isAdmin, isAdminloading] = useAdmin(user?.email)
    if (loading || isAdminloading) {
        return <div className="  flex items-center justify-center">
            <SmallSpin />
        </div>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default AdminRoutes;