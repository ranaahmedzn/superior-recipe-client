import React, { useContext, useState } from 'react';
import illustration from '../../../assets/assets/login.jpg'
import google from '../../../assets/icons/google.png'
import github from '../../../assets/icons/github.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaExclamationCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const { signInUser, googleLogin, githubLogin, resetPassword } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                toast.success('Login successful!👍', {
                    position: toast.POSITION.TOP_CENTER
                })
                navigate(from)
            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toast.success('Successfully login with Google👍', {
                    position: toast.POSITION.TOP_CENTER
                })
                navigate(from)
            }).catch((err) => {
                console.log(err)
                toast.success(err.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            });
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toast.success('Successfully login with Github👍', {
                    position: toast.POSITION.TOP_CENTER
                })
                navigate(from)
            }).catch((err) => {
                console.log(err)
                toast.success(err.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            });
    }

    // set email in state 
    const handleEmail = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue)
    }
    
    const handleResetPassword = () => {
        if(email){
            resetPassword(email)
            .then(() => {
                toast.info("Please check your inbox for resetting password", {
                    position: toast.POSITION.TOP_CENTER
                })
            })
            .catch(err => {
                toast.error(err.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            })
        }
        else{
            toast.error("Enter your email in order to reset password", {
                position: toast.POSITION.TOP_CENTER
            })
        }
        
    }


    return (
        <div className='min-h-[calc(100vh-88px)] h-full login-container'>
            <div className='max-w-screen-xl px-4 py-12 mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10'>
                <img className='h-96 md:h-[650px] md:-ml-24' src={illustration} alt="" />
                <div className='w-full md:w-[460px]'>
                    <div className='px-10 py-10 rounded-xl bg-gradient-to-r from-[#ff8e882a] to-[#de8adf3a]'>
                        <h2 className='font-bold text-3xl mb-5 font-bubblegum'>Login Account</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input onChange={handleEmail} type="email" id="email" className="bg-[#de8adf48] text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-800" placeholder="Enter email" required />
                            </div>
                            <div className="mb-4 relative">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type={show ? "text" : "password"} id="password" className="bg-[#de8adf48] text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-800" placeholder='Enter password' required />
                                {
                                    show ? <FaEyeSlash onClick={() => setShow(!show)} className='absolute top-10 right-3 cursor-pointer' />
                                        : <FaEye onClick={() => setShow(!show)} className='absolute top-10 right-3 cursor-pointer' />
                                }
                            </div>
                            {
                                error && <p className='-mt-2 mb-6 flex gap-1 items-center text-sm font-medium text-rose-500'><FaExclamationCircle /> {error}</p>
                            }
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="accent-indigo-500 bg-[#de8adf48] w-4 h-4 border border-gray-300 rounded bg- focus:ring-3 focus:ring-blue-300" required />
                                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>

                                <span onClick={handleResetPassword} className='ml-2 text-sm font-medium text-indigo-500 hover:underline hover:cursor-pointer'>Forgot password?</span>
                            </div>
                            <button type="submit" className="submit-btn w-full rounded-full">Login</button>
                        </form>
                        <p className='text-center mt-4'>
                            <Link to='/register' className='text-sm font-medium'>Don&rsquo;t have an account? <span className='text-violet-500 hover:underline hover:cursor-pointer'>Register</span></Link>
                        </p>
                    </div>
                    <div className='w-full px-10 md:px-0 md:w-3/5 mx-auto'>
                        <div className='flex justify-center items-center gap-5 my-4'>
                            <span className='h-[1px] w-[200px] bg-gray-500'></span>
                            <span>OR</span>
                            <span className='h-[1px] w-[200px] bg-gray-500'></span>
                        </div>
                        <div>
                            <button onClick={handleGoogleLogin} className='btn-continue mb-3'>
                                <img className='w-[32px]' src={google} alt="" />
                                <span className='mx-auto'>Continue with Google</span>
                            </button>
                            <button onClick={handleGithubLogin} className='btn-continue'>
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