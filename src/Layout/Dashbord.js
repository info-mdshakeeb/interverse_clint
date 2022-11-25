import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Dashbord = () => {
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
                        <li ><Link to='/dashboard/myproducts'>My Product</Link></li>
                        <li ><Link to='/dashboard/myorders'>My Orders</Link></li>
                        <li ><Link to='/dashboard/addusedproduct'>Add A product</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;