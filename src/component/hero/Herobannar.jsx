import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import './HeroBannar.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export const HeroBannar = () => {
  return (
    <div>
      <Swiper
         modules={[Navigation,Autoplay]}
         spaceBetween={10}
         slidesPerView={1}
         navigation ={true}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
         loop={true}
         autoplay={{delay:5000}}
         speed={5000}
      >
        <SwiperSlide>
          <div className="hero-banner">
            <div className='hero-banner-text' data-aos="fade-up">
              <h2 >NEW ARRIVALS ONLY</h2>
              <h1 >new<br />Collections<br />For everyone</h1>
              <button>Latest Collection <FaArrowRight />
              </button>
            </div>
            <div className='hero-banner-img'></div>
          </div>
          </SwiperSlide>
        <SwiperSlide><div className="hero-banner">
          <div className='hero-banner-text' data-aos="fade-up">
            <h2 >NEW ARRIVALS ONLY</h2>
            <h1 >new<br />Collections<br />For everyone</h1>
            <button>Latest Collection <FaArrowRight />
            </button>
          </div>
          <div className='hero-banner-img'></div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-banner">
            <div className='hero-banner-text' data-aos="fade-up">
              <h2 >NEW ARRIVALS ONLY</h2>
              <h1 >new<br />Collections<br />For everyone</h1>
              <button>Latest Collection <FaArrowRight />
              </button>
            </div>
            <div className='hero-banner-img'></div>
          </div>
          </SwiperSlide>
        <SwiperSlide><div className="hero-banner">
          <div className='hero-banner-text' data-aos="fade-up">
            <h2 >NEW ARRIVALS ONLY</h2>
            <h1 >new<br />Collections<br />For everyone</h1>
            <button>Latest Collection <FaArrowRight />
            </button>
          </div>
          <div className='hero-banner-img'></div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default HeroBannar
