import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthUser } from '../Context/UserContext';
import LoadingSpinner from './LoadingSpinner';

const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthUser);

    const navitems =
        <>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/blogs'>Blog</NavLink></li>
            {!user && <li><NavLink to='/login'>Login</NavLink></li>}
        </>
    return (
        <div className=''>
            <div className="navbar bg-base-100  shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navitems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Interverse</Link>
                </div>
                <div className="w-4/6 navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navitems}
                    </ul>
                </div>
                <div className="navbar-end lg:w-1/6">
                    <div className="dropdown dropdown-end mx-auto">
                        <label tabIndex={0} className={`btn btn-ghost ${user ? null : 'btn-disabled'}  btn-circle avatar ${user?.emailVerified ? 'online' : ' offline'}  `}>
                            <div className={`w-10 rounded-full ${loading ? 'w-18' :
                                `${user ? 'ring ring-primary ' : null} ring-offset-base-100 ring-offset-2`} `}>
                                {loading ?
                                    <div className=" flex items-center">
                                        <LoadingSpinner />
                                    </div>
                                    :
                                    <img className='' src={user ? user?.photoURL : 'https://vimcare.com/assets/empty_user-e28be29d09f6ea715f3916ebebb525103ea068eea8842da42b414206c2523d01.png'} alt='pic' />}
                            </div>
                        </label>
                        <ul tabIndex={0} className=" mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/' className="justify-between">
                                    {user?.displayName}
                                    <span className="badge"><Link to='/dashboard'>DashBoarD</Link></span>
                                </Link>
                            </li>
                            <li><Link onClick={logOut}>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;