import React from 'react';
import Marquee from 'react-fast-marquee';
import logo1 from '../../../assets/logos/logo1.png'
import logo2 from '../../../assets/logos/logo2.png'
import logo3 from '../../../assets/logos/logo3.png'
import logo4 from '../../../assets/logos/logo4.png'
import logo5 from '../../../assets/logos/logo5.png'
import logo6 from '../../../assets/logos/logo6.png'
import logo7 from '../../../assets/logos/logo7.png'
import logo8 from '../../../assets/logos/logo8.png'

const Sponsors = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20 py-10 px-3 lg:px-16'>
            <div className='text-center space-y-4'>
                <h3 className='text-5xl font-bold font-bubblegum'>Our Sponsors</h3>
                <p className='lg:w-1/2 mx-auto text-gray-600'>
                    Experience the Authentic Taste of Italy with Our Italian Cuisine Company.
                    Indulge in Traditional Recipes and Innovative Twists on Classic Dishes.
                </p>
            </div>

            <div className='py-3 rounded bg-gradient-to-r from-[#ff8e882a] to-[#de8adf3a] mt-10'>
                <Marquee
                    speed={100}
                    pauseOnHover={true}
                >
                    <div className='flex gap-5 items-center'>
                        <img className='w-[140px]' src={logo6} alt="" />
                        <img className='w-[110px]' src={logo3} alt="" />
                        <img className='w-[110px]' src={logo5} alt="" />
                        <img className='w-[110px]' src={logo2} alt="" />
                        <img className='w-[110px]' src={logo1} alt="" />
                        <img className='w-[140px]' src={logo7} alt="" />
                        <img className='w-[140px]' src={logo8} alt="" />
                        <img className='w-[110px]' src={logo4} alt="" />
                    </div>
                </Marquee>
            </div>

        </div>
    );
};

export default Sponsors;