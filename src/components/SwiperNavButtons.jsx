import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

const SwiperNavButtons = () => {
    const swiper = useSwiper()

    return (
        <div className="flex gap-3">
            <button className='btn-nav-control' onClick={() => swiper.slidePrev()}>
                <FaAngleLeft />
            </button>
            <button className='btn-nav-control' onClick={() => swiper.slideNext()}>
                <FaAngleRight />
            </button>
        </div>
    );
};

export default SwiperNavButtons;