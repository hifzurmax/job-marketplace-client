import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from '../assets/header-logo-dark.svg'

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleLogout = () => {
        signOutUser()
    }


    const navLinks = <>
        <li className="mr-10 font-bold">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-main underline" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="mr-10 font-bold">
            <NavLink
                to="/addjob"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-main underline" : ""
                }
            >
                Add Job
            </NavLink>
        </li>
        <li className="mr-10 font-bold">
            <h2
                
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-main underline" : ""
                }
            >
                About Us
            </h2>
        </li>
        <li className="mr-10 font-bold">
            <h2
                
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-main underline" : ""
                }
            >
                Contact Us
            </h2>
        </li>
    </>

    return (
        <div className="navbar flex justify-between border shadow-inner max-w-7xl mx-auto">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                {
                    user ?
                        <div className="flex items-center gap-4">
                            <div>
                                <h2 className="text-base font-bold text-second">Hi, {user.displayName}</h2>
                            </div>
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu text-sm font-bold text-second capitalize dropdown-content z-[1] shadow bg-base-100 rounded-box w-52">

                                    <li><NavLink to="/mybids">My Bids</NavLink></li>
                                    <li><NavLink to="/myjobs">My Jobs</NavLink></li>
                                    <li><NavLink to="/requests">Bid Requests</NavLink></li>
                                    <li><a onClick={handleLogout}>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                        :
                        <button className="btn btn-outline bg-main text-white hover:bg-second">
                            <FaUserCircle></FaUserCircle>
                            <NavLink to="/login">Login</NavLink>
                        </button>


                }
            </div>
        </div>
    );
};

export default Navbar;