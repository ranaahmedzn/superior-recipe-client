import React, { useState } from 'react';
import illustration from '../../../assets/assets/login.jpg'
import google from '../../../assets/icons/google.png'
import github from '../../../assets/icons/github.png'
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [show, setShow] = useState(false)

    return (
        <div className='min-h-[calc(100vh-88px)] h-full login-container'>
            <div className='max-w-screen-xl py-12 mx-auto flex items-center justify-center gap-10'>
                <img className='h-[650px] -ml-24' src={illustration} alt="" />
                <div className=''>
                    <div className=' px-10 py-10 rounded-xl bg-gray-200'>
                        <h2 className='font-bold text-3xl mb-5 font-bubblegum'>Login Account</h2>
                        <form>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter email" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type={show ? "text" : "password"} id="password" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='Enter password' required />
                                {
                                    show ? <FaEyeSlash onClick={() => setShow(!show)} className='absolute top-10 right-3 cursor-pointer' />
                                    : <FaEye onClick={() => setShow(!show)} className='absolute top-10 right-3 cursor-pointer' />
                                }
                            </div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-blue-300" required />
                                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                 
                                <span className='ml-2 text-sm font-medium text-violet-500 hover:underline hover:cursor-pointer'>Forgot password?</span>
                            </div>
                            <button type="submit" className="submit-btn w-full rounded-full">Login</button>
                        </form>
                        <p className='text-center mt-4'>
                        <Link to='/register' className='text-sm font-medium'>Don&rsquo;t have an account? <span className='text-violet-500 hover:underline hover:cursor-pointer'>Register</span></Link>
                        </p>
                    </div>
                    <div className='w-3/5 mx-auto'>
                        <div className='flex justify-center items-center gap-5 my-4'>
                            <span className='h-[1px] w-[200px] bg-gray-500'></span>
                            <span>OR</span>
                            <span className='h-[1px] w-[200px] bg-gray-500'></span>
                        </div>
                        <div>
                            <button className='btn-continue mb-3'>
                                <img className='w-[32px]' src={google} alt="" />
                                <span className='mx-auto'>Continue with Google</span>
                            </button>
                            <button className='btn-continue'>
                                <img className='w-[32px]' src={github} alt="" />
                                <span className='mx-auto'>Continue with Github</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;