import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../assets/assets/error-img.jpg'
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div  className='h-screen flex justify-center items-center'>
            <div className='flex gap-5 flex-col items-center'>
                <img className='w-[400px] -mt-10' src={errorImg} alt="" />
                <h2 className='font-bold text-4xl font-bubblegum'>{error?.error?.message}</h2>
                <Link to='/'>
                    <button className='submit-btn flex gap-2 items-center'>
                        <FaHome />
                        <span>Back to Home</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;