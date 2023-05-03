import React from 'react';
import './ChefCard.css'
import { FaArrowRight } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, chef_name, chef_picture, number_of_recipes, experience, likes } = chef;

    return (
        <div className="flex items-center gap-5 group w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className='w-[170px] h-[170px] relative bg-violet-500 rounded-full'>
                <LazyLoad height={200} width={200} offset={100}>
                    <img className='w-[200px] h-[200px] absolute bottom-0 rounded-full' src={chef_picture} alt="" />
                </LazyLoad>
            </div>
            <div className='text-left space-y-2'>
                <h4 className='font-bold text-3xl font-bubblegum'>{chef_name}</h4>
                <p className='font-medium'>Experience: {experience} Years+</p>
                <p className='font-medium'>Recipes: {number_of_recipes}+</p>
                <p className='font-medium'>Likes: {likes}</p>
                <Link to={`/chef-recipes/chef/${id}`}>
                    <button className='submit-btn flex items-center gap-2'>
                        <span>View Recipes</span>
                        <FaArrowRight />
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default ChefCard;