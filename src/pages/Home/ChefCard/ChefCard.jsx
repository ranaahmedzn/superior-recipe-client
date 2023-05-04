import React from 'react';
import './ChefCard.css'
import { FaArrowRight, FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, chef_name, chef_picture, number_of_recipes, experience, likes } = chef;

    return (
        <div className="md:flex items-center gap-5 group w-full pt-10 p-5 md:p-7 bg-gray-50 border border-gray-300 rounded-lg">
            <div className='mx-auto mb-3 md:-mb-5 w-[200px] h-[200px] relative bg-gradient-to-r from-[#ec938c] via-[#ff7189] to-[#ff5cab] rounded-full'>
                <LazyLoad height={200} width={200} offset={100}>
                    <img className='w-[230px] h-[230px] absolute bottom-0 rounded-full' src={chef_picture} alt="" />
                </LazyLoad>
            </div>
            <div className='lg:w-1/2 text-left space-y-2'>
                <h4 className='font-bold text-3xl font-bubblegum text-center md:text-left'>{chef_name}</h4>
                <p className='font-medium'>Experience: {experience} Years+</p>
                <p className='font-medium'>Recipes: {number_of_recipes}+</p>
                <p className='font-medium flex gap-2 items-center'>
                    <span>Likes: {likes}</span>
                    <FaHeart className='text-rose-500'/>
                </p>
                <Link to={`/chef-recipes/chef/${id}`}>
                    <button className='submit-btn w-full mt-5 flex justify-center items-center gap-2'>
                        <span>View Recipes</span>
                        <FaArrowRight />
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default ChefCard;