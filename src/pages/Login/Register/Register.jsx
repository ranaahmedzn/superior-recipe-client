import React, { useContext, useState } from 'react';
import illustration from '../../../assets/assets/login.jpg'
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {createUser} = useContext(AuthContext) 

    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo_url.value;
        // console.log(name, email, password, photoUrl)

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            form.reset()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleEmail = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue)
    }

    const handlePassword = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue)
    }

    return (
        <div className='min-h-[calc(100vh-88px)] h-full login-container'>
            <div className='max-w-screen-xl py-16 mx-auto flex flex-row-reverse items-center justify-center gap-10'>
                <img className='h-[650px] -mr-24' src={illustration} alt="" />
                <div className='w-5/12'>
                    <div className='w-full px-10 py-10 rounded-xl bg-gray-200'>
                        <h2 className='font-bold text-3xl mb-5 font-bubblegum'>Register Account</h2>
                        <form onSubmit={handleRegister}>
                            <div className="mb-6">
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">What&rsquo;s your name?</label>
                                <input type="text" name='name' id="name" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter name" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">What&rsquo;s your email?</label>
                                <input onChange={handleEmail} type="email" name='email' id="email" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter email" required />
                            </div>
                            <div className="mb-6 relative">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Create a password</label>
                                <input onChange={handlePassword} type={show ? "text" : "password"} name='password' id="password" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='Enter password' required />
                                {
                                    show ? <FaEyeSlash onClick={() => setShow(!show)} className='absolute top-10 right-3 cursor-pointer' />
                                    : <FaEye onClick={() => setShow(!show)} className='absolute top-10 right-3 cursor-pointer' />
                                }
                            </div>
                            <div className="mb-6">
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">Photo URL</label>
                                <input type="text" name='photo_url' id="photo_url" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter photo url" required />
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-blue-300" required />
                                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">
                                        <span>Accept </span>
                                        <Link to='/terms' className='text-violet-500 hover:underline'>Terms & Conditions</Link>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="submit-btn w-full rounded-full">Register</button>
                        </form>
                        <p className='text-center mt-4'>
                            <Link to='/login' className='text-sm font-medium'>Already have an account? <span className='text-violet-500 hover:underline hover:cursor-pointer'>Login</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;