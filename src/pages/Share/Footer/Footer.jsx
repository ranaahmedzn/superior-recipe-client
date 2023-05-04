import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { toast } from 'react-toastify';

const Footer = () => {
    
    const handleSubscribe = (e) => {
        e.preventDefault()
        setTimeout(() => {
            toast.success('Successfully subscribed😊',  {
                position: toast.POSITION.TOP_CENTER
              })
            e.target.reset()
        }, 700)
    }

    return (
        <div>
            <div className='w-full bg-gray-800 px-4'>
                <div className='max-w-screen-xl mx-auto py-10 lg:py-16 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
                    <div className='lg:col-span-2 space-y-5 lg:mr-10'>
                        <Link className='font-bold text-3xl text-white' to="/">Subscribe</Link>
                        <p className='text-base text-gray-300'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>

                        <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                            <label htmlFor="subscribe" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FaEnvelope className='text-gray-50' />
                                </div>
                                <input type="text" id="subscribe" className="w-full text-gray-50 text-medium bg-gray-700 text-base px-5 py-2.5 pl-10 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ffa93f] focus:border-0 placeholder-gray-50" placeholder="Your email" required />
                            </div>
                            <button className="primary-btn">
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className='text-gray-300 space-y-3'>
                        <h3 className='font-bold text-2xl text-white'>Company</h3>
                        <p>Recipes</p>
                        <p>Blog</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='text-gray-300 space-y-3'>
                        <h3 className='font-bold text-2xl text-white'>Products</h3>
                        <p>Plans & Pricing</p>
                        <p>Prototype</p>
                        <p>Customers</p>
                        <p>Integrations</p>
                    </div>
                    <div className='text-gray-300 space-y-3'>
                        <h3 className='font-bold text-2xl text-white'>Contact</h3>
                        <p className='flex gap-2 items-center'>
                            <FaMapMarkerAlt />
                            <span>Viale Pergolesi, 10, 20124 Milan, Italy</span>
                        </p>
                        <p className='flex gap-2 items-center'>
                            <FaEnvelope />
                            <span>info@superior.recipe.com</span>
                        </p>
                        <p className='flex gap-2 items-center'>
                            <FaPhone />
                            <span>+39 02 1234567</span>
                        </p>
                    </div>
                </div>
                <div>
                <div className='max-w-screen-xl mx-auto py-6 flex gap-4 flex-col-reverse md:flex-row justify-between md:items-center text-gray-400'>
                    <p>&copy;2023 Superior Recipe | All Rights Reserved</p>
                    <div className='flex gap-3'>
                        <span className='social-btn'><FaFacebookSquare /></span>
                        <span className='social-btn'><FaTwitter /></span>
                        <span className='social-btn'><FaInstagram /></span>
                        <span className='social-btn'><FaYoutube /></span>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Footer;