import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import './HeroBannar.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import heroImage from '../../assets/hero5.png';
import heroMen from '../../assets/hero7.png'
import herowomen from '../../assets/hero8.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export const HeroBannar = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={false}
        loop={true}
        autoplay={{ delay: 5000 }}
        speed={2000}
      >
        {/* Slide 1 - For Everyone */}
        <SwiperSlide>
          <div className="hero-banner">
            <div className='hero-banner-text' data-aos="fade-up">
              <h2>NEW ARRIVALS ONLY</h2>
              <h1>New<br />Collections<br />For Everyone</h1>
              <button>Latest Collection <FaArrowRight /></button>
            </div>
            <div className='hero-banner-img'></div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - For Women */}
        <SwiperSlide>
          <div className="hero-banner">
            <div className='hero-banner-text' data-aos="fade-up">
              <h2>PREMIUM WOMEN'S WEAR</h2>
              <h1>Elegant<br />Fashion<br />For Women</h1>
              <button>Shop Women's Collection <FaArrowRight /></button>
            </div>
            <div className='hero-banner-img' style={{ backgroundImage: `url(${herowomen})` }}></div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - For Men */}
        <SwiperSlide>
          <div className="hero-banner">
            <div className='hero-banner-text' data-aos="fade-up">
              <h2>PREMIUM MEN'S WEAR</h2>
              <h1>Style &<br />Comfort<br />For Men</h1>
              <button>Explore Men's Fashion <FaArrowRight /></button>
            </div>
            <div className='hero-banner-img'  style={{ backgroundImage: `url(${heroMen})` }}></div>
          </div>
        </SwiperSlide>

        {/* Slide 4 - For Kids */}
        <SwiperSlide>
          <div className="hero-banner">
            <div className='hero-banner-text' data-aos="fade-up">
              <h2>CUTE & TRENDY KIDS WEAR</h2>
              <h1>Fun &<br />Fashion<br />For Kids</h1>
              <button>Discover Kids' Collection <FaArrowRight /></button>
            </div>
            <div className='hero-banner-img' style={{ backgroundImage: `url(${heroImage})` }}></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HeroBannar;
