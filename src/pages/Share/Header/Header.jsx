import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleLogout = () => {
        signOutUser()
        .then(() => toast.success('Logout successful!', {
            position: toast.POSITION.TOP_CENTER
        }))
        .catch(err => console.log(err))
    }

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
                                user ?
                                    <div className='flex gap-3 items-center ml-5'>
                                        <div className="group flex relative">
                                            <img className='w-[45px] cursor-text rounded-full ring ring-[#2ec4b6]' src={user.photoURL} alt="" />
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
        </nav>

    );
};

export default Header;