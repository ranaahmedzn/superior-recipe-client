import React from 'react';
import './Banner.css'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowRight } from 'react-icons/fa';
import SwiperNavButtons from '../../../components/SwiperNavButtons';

const Banner = () => {
    return (
        <div className='min-h-[calc(100vh-88px)]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation, A11y]}
            >
                <SwiperSlide className='res-slide'>
                    <div className='max-w-screen-xl min-h-[calc(100vh-88px)] mx-auto flex items-center'>
                        <div className='space-y-5 w-1/2'>
                            <h2 className='font-bold text-6xl leading-[80px] text-white'>A Journey Through Flavor and Tradition</h2>
                            <p className='text-gray-400'>Italian cuisine is more than just food; it is a celebration of life, love, and community. This title invites you to explore the rich history and cultural significance of Italian cuisine, as well as the techniques and ingredients that make it so special.</p>
                            <button className='primary-btn flex gap-2 items-center'>
                                <span>Explore More</span>
                                <FaArrowRight />
                            </button>
                            <SwiperNavButtons></SwiperNavButtons>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='res-slide'>
                    <div className='max-w-screen-xl min-h-[calc(100vh-88px)] mx-auto flex items-center'>
                        <div className='space-y-5 w-1/2'>
                            <h2 className='font-bold text-6xl leading-[80px] text-white'> The Fresh Ingredients of Italian Cooking</h2>
                            <p className='text-gray-400'>Italian cuisine is famous for its use of fresh, high-quality ingredients, and this title takes you on a journey through the farms, markets, and kitchens of Italy to discover the secrets behind its delicious dishes. From fresh pasta to seasonal vegetables.</p>
                            <button className='primary-btn flex gap-2 items-center'>
                                <span>Explore More</span>
                                <FaArrowRight />
                            </button>
                            <SwiperNavButtons></SwiperNavButtons>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='res-slide'>
                    <div className='max-w-screen-xl min-h-[calc(100vh-88px)] mx-auto flex items-center'>
                        <div className='space-y-5 w-1/2'>
                            <h2 className='font-bold text-6xl leading-[80px] text-white'> Healthy Eating with Italian Flair</h2>
                            <p className='text-gray-400'> With its rich history and diverse regional cuisines, Italy is a food lovers paradise. This title invites you to explore the unique flavors and traditions of Italian cooking, from the hearty dishes of the north to the fresh seafood of the south. </p>
                            <button className='primary-btn flex gap-2 items-center'>
                                <span>Explore More</span>
                                <FaArrowRight />
                            </button>
                            <SwiperNavButtons></SwiperNavButtons>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;