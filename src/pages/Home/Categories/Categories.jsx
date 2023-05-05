import React from 'react';
import './Categories.css'

const Categories = () => {
    return (
        <section className='mb-20'>
            <div className='categories-header flex justify-center items-center text-white'>
                <div className='text-center space-y-4 -mt-5 px-4'>
                    <h5 className='text-base uppercase font-semibold'>Featured</h5>
                    <h3 className='text-5xl font-bold font-bubblegum'>Categories of Recipes</h3>
                    <p className='lg:w-1/2 mx-auto text-gray-400'>Ciao, Bella! Delight your taste buds with these five famous Italian food categories, from classic pizza and pasta to creamy risotto, and savory antipasti.</p>
                </div>
            </div>
            
            {/* for large device  */}
            <div className='flex flex-col justify-center max-w-screen-xl -mt-20 mx-auto px-10 md:grid md:grid-cols-2 lg:grid-cols-4'>
                <div className='relative overflow-hidden mx-auto w-[270px] h-[270px] rounded-full border-[12px] border-white'>
                    <div className="category first hover:scale-125 transition-all duration-300">
                    </div>
                    <p className="category-title text-4xl mb-10">Pizza</p>
                </div>
                <div className='relative overflow-hidden mx-auto w-[270px] h-[270px] rounded-full border-[12px] border-white'>
                    <div className="category second hover:scale-125 transition-all duration-300">
                    </div>
                    <p className="category-title text-4xl">Risotto</p>
                </div>
                <div className='relative overflow-hidden mx-auto w-[270px] h-[270px] rounded-full border-[12px] border-white'>
                    <div className="category third hover:scale-125 transition-all duration-300">
                    </div>
                    <p className="category-title text-4xl">Pasta</p>
                </div>
                <div className='relative overflow-hidden mx-auto w-[270px] h-[270px] rounded-full border-[12px] border-white'>
                    <div className="category forth hover:scale-125 transition-all duration-300">
                    </div>
                    <p className="category-title text-4xl">Antipasti</p>
                </div>
            </div>
        </section>
    );
};

export default Categories;