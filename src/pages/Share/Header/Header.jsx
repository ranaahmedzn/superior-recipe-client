import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);

    return (
        <nav className="bg-white"> {/* //sticky top-0 z-50 */}
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                <Link to='/' className="flex items-center">
                    <span className="self-center text-4xl font-bubblegum font-semibold whitespace-nowrap dark:text-white">Superior Recipe</span>
                </Link>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive
                                        ? "active"
                                        : "default"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog'
                                className={({ isActive }) =>
                                    isActive
                                        ? "active"
                                        : "default"
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'
                                className={({ isActive }) =>
                                    isActive
                                        ? "active"
                                        : "default"
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'
                                className={({ isActive }) =>
                                    isActive
                                        ? "active"
                                        : "default"
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            {
                                user ? <div className='flex gap-3 items-center ml-5'>
                                    <img className='w-[45px] cursor-text rounded-full ring ring-blue-500' src="https://i.ibb.co/py09c0j/kashem.jpg" alt="" />
                                    <button className='primary-btn'>Logout</button>
                                </div>
                                    : <Link to='/login'><button className='primary-btn ml-5'>Login</button></Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;