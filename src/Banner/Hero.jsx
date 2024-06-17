import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Hero.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src="./public/banner/web1.jpg" alt="Banner1" className='d-none d-sm-block'/>
            <img src="./public/banner/mob1.jpg" alt="Banner2" className='d-block d-sm-none'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./public/banner/web2.jpg" alt="Banner" className='d-none d-sm-block'/>
            <img src="./public/banner/mob2.jpg" alt="Banner" className='d-block d-sm-none'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}