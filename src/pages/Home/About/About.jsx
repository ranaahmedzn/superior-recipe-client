import React from 'react';

const About = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-16 pt-10 px-3 lg:px-16'>
            <div className='grid gap-20 grid-cols-1 md:grid-cols-2'>
                <div>
                    <h3 className='text-5xl mb-16 font-bold font-bubblegum'>About Italian Cuisine </h3>
                    <div className='px-4'>
                        <div className="relative mb-2">
                            <span className="absolute top-0 -left-4 h-8 w-8 rounded-full bg-gradient-to-r from-[#FFC444] to-[#FAAA49] flex justify-center items-center font-bubblegum">01</span>
                            <h4 className="text-xl font-bold ml-10 mb-3">Flavorful Tapestry</h4>
                            <p className='border-l-2 border-gray-400 pl-10 pb-6 text-gray-600'>Italian cuisine weaves a flavorful tapestry of tradition and innovation, where timeless recipes and modern twists coalesce to create a culinary masterpiece that&apos;s both comforting and exciting.</p>
                        </div>
                        <div className="relative mb-2">
                            <span className="absolute top-0 -left-4 h-8 w-8 rounded-full bg-gradient-to-r from-[#FFC444] to-[#FAAA49] flex justify-center items-center font-bubblegum">02</span>
                            <h4 className="text-xl font-bold ml-10 mb-3">Essence of Simplicity</h4>
                            <p className='border-l-2 border-gray-400 pl-10 pb-6 text-gray-600'>Italian cooking celebrates the beauty of simplicity, elevating humble ingredients like tomatoes, olive oil, and fresh herbs into dishes that burst with uncomplicated yet exquisite flavors.</p>
                        </div>
                        <div className="relative mb-2">
                            <span className="absolute top-0 -left-4 h-8 w-8 rounded-full bg-gradient-to-r from-[#FFC444] to-[#FAAA49] flex justify-center items-center font-bubblegum">03</span>
                            <h4 className="text-xl font-bold ml-10 mb-3">Regional Charms</h4>
                            <p className='border-l-2 border-gray-400 pl-10 pb-6 text-gray-600'>From the northern Alps to the southern coasts, Italian cuisine is a journey through diverse regional charms, each offering a unique palette of tastes and textures that paint a vivid portrait of Italy&apos;s landscapes.</p>
                        </div>
                        <div className="relative mb-2">
                            <span className="absolute top-0 -left-4 h-8 w-8 rounded-full bg-gradient-to-r from-[#FFC444] to-[#FAAA49] flex justify-center items-center font-bubblegum">04</span>
                            <h4 className="text-xl font-bold ml-10 mb-3">Culinary Poetry</h4>
                            <p className='pl-10 text-gray-600'>Italian cuisine is a mesmerizing poetic symphony of taste, where every meticulously crafted dish narrates a story of generations past, intricately intertwining rich culture, and a profound, unending love for food that effortlessly transcends borders.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <img className='w-full rounded-lg' src="https://i.ibb.co/ZJT77vK/italian-cuisine.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;