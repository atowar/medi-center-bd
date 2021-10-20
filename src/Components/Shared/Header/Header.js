import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo/logo.png';
import navicon from '../../../images/others/navbar-icon.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faBars } from '@fortawesome/free-solid-svg-icons';


const Header = ({ fixed }) => {
    const { user, logOut } = useAuth();
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const element = <FontAwesomeIcon icon={faBars} />
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <img style={{ width: "250px" }} src={logo} alt="site logo" />
                        <div
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            
                            <img className="w-3/12" src={navicon} alt="" />
                            
                        </div>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <NavLink to="/home">Home</NavLink>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <NavLink to="/about-us">About</NavLink>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <NavLink to="/consultants">Faq</NavLink>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span>{user.displayName}</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    {
                                        user.email ? <button onClick={logOut}>Sign-Out</button>
                                            :
                                            <Link to="/signin">Sign-In</Link>}
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

// const Header = () => {
//     const {user, logOut} = useAuth();
//     return (
//         <div className=" nav flex border-t-2 border-green-400 mx-10 items-center">
//             <div className="logo flex-none">
//                 <img style={{width: "250px"}} src={logo} alt="site logo" />
//             </div>
//             <div className="nav-menu text-end flex-grow text-right">
//                 <NavLink to="/home">Home</NavLink>
//                 <NavLink to="/about-us">About</NavLink>
//                 <NavLink to="/consultants">Faq</NavLink>
//                 <span>{user.displayName}</span>
//                 {
//                 user.email? <button onClick={logOut}>Sign-Out</button>
//                 :
//                 <NavLink to="/signin"><button>Sign-In</button></NavLink>}
//             </div>

//         </div>
//     );
// };

export default Header;