import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
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
            <div className="drawer drawer-mobile">
                <input id="sideNav" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="sideNav" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li ><NavLink to='/dashboard/myorders'>My Orders</NavLink></li>
                        {(isSeller || isAdmin) &&
                            <>
                                <li ><NavLink to='/dashboard/myproducts'>My Product</NavLink></li>
                                <li ><NavLink to='/dashboard/addusedproduct'>Add A product</NavLink></li>
                            </>
                        }
                        {isAdmin &&
                            <>
                                <li ><NavLink to='/dashboard/allsellers'> All Sellers</NavLink></li>
                                <li ><NavLink to='/dashboard/allbuyers'>All Buyers</NavLink></li>
                                <li ><NavLink to='/dashboard/reporteditem'>Reported Items</NavLink></li>
                            </>}

                    </ul>

                </div>
            </div>


        </div>



        // <div>
        //     
        //     <div className="drawer drawer-mobile  ">
        //         <input id="side-nav" type="checkbox" className="drawer-toggle" />
        //         <div className="drawer-content ">
        //             <Outlet />
        //         </div>
        //         <div className="drawer-side">
        //             <label htmlFor="side-navb" className="drawer-overlay"></label>
        //             <ul className="menu p-4 w-80  text-base-content">

        //                 
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Dashbord;