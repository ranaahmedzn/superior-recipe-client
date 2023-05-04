import React from 'react';
import './Categories.css'

const Categories = () => {
    return (
        <section className='mb-20'>
            <div className='categories-header flex justify-center items-center text-white'>
                <div className='text-center space-y-4 -mt-5'>
                    <h5 className='text-base uppercase font-semibold'>Featured</h5>
                    <h3 className='text-5xl font-bold font-bubblegum'>Categories of Recipes</h3>
                    <p className='w-1/2 mx-auto text-gray-400'>Ciao, Bella! Delight your taste buds with these five famous Italian food categories, from classic pizza and pasta to creamy risotto, and savory antipasti.</p>
                </div>
            </div>
            <div className='max-w-screen-xl -mt-20 mx-auto px-10 grid md:grid-cols-2 lg:grid-cols-4'>
                <div className='relative overflow-hidden w-[270px] h-[270px] rounded-full border-8 border-[#2ec4b6]'>
                    <div className="category hover:scale-125 transition-all duration-300">
                    </div>
                    <p className="category-title text-2xl">Pizza</p>
                </div>
                <div className='relative overflow-hidden w-[270px] h-[270px] rounded-full border-8 border-[#2ec4b6]'>
                    <div className="category hover:scale-125 transition-all duration-300">
                    </div>
                    <p className="category-title text-2xl">Risotto</p>
                </div>
                <div className='relative overflow-hidden w-[270px] h-[270px] rounded-full border-8 border-[#2ec4b6]'>
                    <div className="category hover:scale-125 transition-all duration-300">
                    </div>
                    <p className="category-title text-2xl">Pasta</p>
                </div>
                <div className='relative overflow-hidden w-[270px] h-[270px] rounded-full border-8 border-[#2ec4b6]'>
                    <div className="category hover:scale-125 transition-all duration-300">
                    </div>
                    <p className="category-title text-2xl">Antipasti</p>
                </div>
            </div>
        </section>
    );
};

export default Categories;