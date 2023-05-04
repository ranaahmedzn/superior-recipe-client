import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

const Header = () => {
    const [open, setOpen] = useState(false)
    const { user, signOutUser } = useContext(AuthContext);

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                toast.success('Logout Successful!👍', {
                    position: toast.POSITION.TOP_CENTER
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <nav className="bg-white"> {/* //sticky top-0 z-50 */}

            {/* for larger device */}
            <div className="hidden max-w-screen-xl md:flex items-center justify-between mx-auto p-5">
                <Link to='/' className="flex items-center">
                    <span className="self-center text-4xl font-bubblegum font-semibold whitespace-nowrap dark:text-white">Superior Recipe</span>
                </Link>
                <div className="w-full md:block md:w-auto">
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
                                user ?
                                    <div className='flex gap-3 items-center ml-5'>
                                        <div className="group flex relative">
                                            {
                                                user?.photoURL && <img className='w-[45px] cursor-text rounded-full ring-2 ring-[#FAAA49]' src={user.photoURL} alt="" />
                                            }
                                            <div className="group-hover:block transition bg-gray-900 p-2.5 text-sm text-center text-gray-100 rounded-md absolute z-50 left-1/2 -translate-x-1/2 translate-y-[90%] hidden "><p>{user?.displayName}</p><p>{user?.email}</p></div>
                                        </div>
                                        <button onClick={handleLogout} className='primary-btn'>Logout</button>
                                    </div>
                                    : <Link to='/login'><button className='primary-btn ml-5'>Login</button></Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>

            {/* for smaller device  */}
            <div className='lg:hidden relative h-[75px] p-4 flex justify-between items-center'>
                <Link to='/' className="flex items-center">
                    <span className="self-center text-4xl font-bubblegum font-semibold whitespace-nowrap dark:text-white">Superior Recipe</span>
                </Link>
                <div onClick={() => setOpen(!open)}>
                    {
                        open
                            ? <HiXMark className="h-8 w-8 text-black" />
                            : <HiBars3BottomRight className="h-8 w-8 text-black" />
                    }
                </div>

                <ul className={`flex flex-col z-50 absolute gap-8 py-8 px-6 ${open ? 'top-[75px] left-0' : "top-[75px] -left-[1000px]"} duration-500 bg-gray-700 w-full`}>
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
                        <NavLink
                            to='/blog'
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
                        <NavLink
                            to='/about'
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
                        <NavLink
                            to='/contact'
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
                            user ?
                                <div className='flex gap-3 items-center'>
                                    <div className="group flex relative">
                                        {
                                            user?.photoURL && <img className='w-[45px] cursor-text rounded-full ring ring-[#FAAA49]' src={user.photoURL} alt="" />
                                        }
                                        <div className="group-hover:block transition bg-gray-900 p-2.5 text-sm text-center text-gray-100 rounded-md absolute z-50 left-1/2 -translate-x-1/2 translate-y-[90%] hidden "><p>{user?.displayName}</p><p>{user?.email}</p></div>
                                    </div>
                                    <button onClick={handleLogout} className='primary-btn'>Logout</button>
                                </div>
                                : <Link to='/login'><button className='primary-btn'>Login</button></Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Header;