import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import logo from '../../../images/logo/logo.png'
import './Header.css'

const Header = () => {
    const {user, logOut} = useFirebase();
    return (
        <div className=" nav flex border-t-2 border-green-400 mx-10 items-center">
            <div className="logo flex-none">
                <img style={{width: "250px"}} src={logo} alt="site logo" />
            </div>
            <div className="nav-menu text-end flex-grow text-right">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about-us">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/consultants">Consultants</NavLink>
                <NavLink to="/consultants">Faq</NavLink>
                <span>name: </span>
                {
                user.email? <button onClick={logOut}>Sign-Out</button>
                :
                <NavLink to="/signin"><button>Sign-In</button></NavLink>}
            </div>

        </div>
    );
};

export default Header;