import React from 'react';
import './Categories.css'

const Categories = () => {
    return (
        <section className='mb-40'>
            <div className='categories-header flex justify-center items-center text-white'>
                <div className='text-center space-y-3'>
                    <h5 className='text-base uppercase font-semibold'>Featured</h5>
                    <h3 className='text-5xl font-bold font-bubblegum'>Categories of Recipes</h3>
                    <p className='w-1/2 mx-auto text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis numquam autem nesciunt, quod iste aliquam aliquid facere soluta illum accusantium hic sit qui ea eligendi?</p>
                </div>
            </div>
            <div className='max-w-screen-xl -mt-20 mx-auto px-10 grid md:grid-cols-2 lg:grid-cols-4'>
                <div className='relative overflow-hidden w-[270px] h-[270px] rounded-full border-8 border-[#2ec4b6]'>
                    <div className="category hover:scale-125 transition-all duration-300">
                    </div>
                    <p className="category-title text-2xl">Chicken Chowmin</p>
                </div>
                <div className='relative overflow-hidden w-[270px] h-[270px] rounded-full border-8 border-[#2ec4b6]'>
                    <div className="category hover:scale-125 transition-all duration-300">
                    </div>
                    <p className="category-title text-2xl">Chicken Chowmin</p>
                </div>
                <div className='relative overflow-hidden w-[270px] h-[270px] rounded-full border-8 border-[#2ec4b6]'>
                    <div className="category hover:scale-125 transition-all duration-300">
                    </div>
                    <p className="category-title text-2xl">Chicken Chowmin</p>
                </div>
                <div className='relative overflow-hidden w-[270px] h-[270px] rounded-full border-8 border-[#2ec4b6]'>
                    <div className="category hover:scale-125 transition-all duration-300">
                    </div>
                    <p className="category-title text-2xl">Chicken Chowmin</p>
                </div>
            </div>
        </section>
    );
};

export default Categories;