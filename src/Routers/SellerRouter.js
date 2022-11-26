import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SmallSpin from '../Components/SmallSpin';
import { AuthUser } from '../Context/UserContext';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';

const SellerRouter = ({ children }) => {

    const { user, loading } = useContext(AuthUser)
    const [isSeller, selletLoadnig] = useSeller(user?.email);
    const [isAdmin, isAdminloading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || selletLoadnig || isAdminloading) {
        return <div className="  flex items-center justify-center h-screen">
            <SmallSpin />
        </div>
    }
    if (user && (isSeller || isAdmin)) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default SellerRouter;