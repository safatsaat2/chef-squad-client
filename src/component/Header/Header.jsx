import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Header = () => {

    const { user, logOut, auth } = useContext(AuthContext)

    const img = auth.currentUser?.photoURL;
    const name = auth.currentUser?.displayName;

    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast.success("Signed Out")
            })
            .catch(err => {
                console.log(err)
            })
    }
    const location = useLocation();
    console.log(location)

    return (
        <div className="navbar bg-orange-200">
            <ToastContainer
                position='top-center'
            />
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to={'/'} className={location.pathname === "/" ? "px-4 font-bold" : "px-4"}>Home</Link>
                        <Link to={'/blog'} className={location.pathname === "/blog" ? "px-4 font-bold" : "px-4"}>Blog</Link>
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case text-2xl">Chef Squad</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal ">
                    <Link to={'/'} className={location.pathname === "/" ? "px-4 font-bold" : "px-4"}>Home</Link>
                    <Link to={'/blog'} className={location.pathname === "/blog" ? "px-4 font-bold" : "px-4"}>Blog</Link>
                </ul>
            </div>
            {user ? <div className="navbar-end">
                <div className="tooltip tooltip-bottom" data-tip={name}>
                    <img src={img} className='w-10 h-10 rounded-full mr-5' alt="img" />
                </div>
                <Link className="btn" onClick={handleLogOut}>Log out</Link>
            </div> : <div className="navbar-end">
                <Link to={'/login'} className="btn mr-3" >Sign in
                </Link>
                <Link to={'/register'} className="btn">Register</Link>
            </div>}

        </div>
    );
};

export default Header;