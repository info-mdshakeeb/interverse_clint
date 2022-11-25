import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Dashbord = () => {
    return (
        <div>
            < Navbar />
            <div className="drawer drawer-mobile ">
                <input id="side-nav" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="side-navb" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li ><Link to='/dashboard'>My Appionments</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;