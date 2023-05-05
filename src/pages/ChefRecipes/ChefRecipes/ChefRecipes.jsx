import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './ChefRecipes.css'
import { FaFacebook, FaHeart, FaTwitter, FaYoutube } from 'react-icons/fa';
import Recipe from '../Recipe/Recipe';

const ChefRecipes = () => {
    const [chef, setChef] = useState({})
    const recipes = useLoaderData()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://superior-recipe-server-ranasheikhzn.vercel.app/chefs/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [id])

    const { chef_name, chef_fullPicture, experience, description, likes, number_of_recipes } = chef;

    return (
        <div className='min-h-[calc(100vh-88px)]'>
            <div className='chef-recipe-banner flex justify-center items-center text-white'>
                <h2 className='text-5xl font-bold'>Chef Recipes</h2>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center gap-16 max-w-screen-xl mx-auto px-5 py-20 my-10'>
                <div className='w-full md:w-1/2 relative'>
                    <div className='rounded-lg relative overflow-hidden'>
                        <img className='hover:scale-125 hover:cursor-text hover:translate-y-10 duration-500 ease-in-out transition-all w-full rounded-lg' src={chef_fullPicture} alt="" />

                    </div>
                    <span className='text-gray-900 bg-gradient-to-r from-[#FFC444] to-[#FAAA49] font-bold rounded-lg text-base md:text-lg absolute left-0 -bottom-6 md:-right-5 md:-bottom-5 p-3 md:p-5 shadow-xl'>{experience}+ Years of Experience</span>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='space-y-3 mb-3'>
                        <h3 className='text-5xl font-bold font-bubblegum'>{chef_name}</h3>
                        <p className='font-bold text-xl'>About Chef</p>
                        <p className='text-gray-600'>{description}</p>
                    </div>

                    <div className='space-y-2'>
                        <p className='flex gap-1 items-center'>
                            <FaHeart className='text-rose-500' />
                            <span className='text-medium font-medium'>Total Likes: {likes}+</span>
                            <span ></span>
                        </p>
                        <p className='text-medium font-medium'>Numbers of Recipe: {number_of_recipes}</p>
                    </div>
                    <p className='font-bold text-xl mt-10 mb-3'>Follow ON:</p>
                    <div className='flex gap-3'>
                        <span className='text-xl hover:text-rose-500 cursor-pointer'><FaFacebook /></span>
                        <span className='text-xl hover:text-rose-500 cursor-pointer'><FaTwitter /></span>
                        <span className='text-xl hover:text-rose-500 cursor-pointer'><FaYoutube /></span>
                    </div>
                </div>
            </div>

            <div className='max-w-screen-xl mx-auto px-5 pb-12 '>
                <h3 className='text-4xl mb-5 text-center font-bold'>{chef_name}&apos;s Recipes</h3>
                <div className='grid gap-7 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        recipes.map((recipe, idx) => <Recipe
                            key={idx}
                            recipe={recipe}
                        ></Recipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;