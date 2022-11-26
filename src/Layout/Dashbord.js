import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { AuthUser } from '../Context/UserContext';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';

const Dashbord = () => {
    const { user } = useContext(AuthUser)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            < Navbar />
            <div className="drawer drawer-mobile  ">
                <input id="side-nav" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="side-navb" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">

                        <li ><Link to='/dashboard/myorders'>My Orders</Link></li>
                        {(isSeller || isAdmin) &&
                            <>
                                <li ><Link to='/dashboard/myproducts'>My Product</Link></li>
                                <li ><Link to='/dashboard/addusedproduct'>Add A product</Link></li>
                            </>
                        }
                        {isAdmin &&
                            <>
                                <li ><Link to='/dashboard/allsellers'> All Sellers</Link></li>
                                <li ><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li ><Link to='/dashboard/reporteditem'>Reported Items</Link></li>
                            </>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;