import React, { useContext } from 'react'
import CarouselSlide from './CarouselSlide';
import Loader from '../Loader/Loader';
import { Context } from '../../context/context';

// Imports for using Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = () => {
  const {carouselSlides, isCarouselLoading} = useContext(Context);

  // Do not render the component if no slides exists
  if(!carouselSlides.length || !Array.isArray(carouselSlides)) return null;

  return isCarouselLoading ?
    // Loading Page 
    <Loader /> 
    :
    // Carousel
    (
      <div className='carousel'>
          <Swiper
            loop={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[
              Pagination,
              Autoplay
            ]}
            className="mySwiper"
          >
          {
            carouselSlides.map((slide) => {
              const {id, slideTitle, slideDescription, slideBg} = slide;
              return (
                <SwiperSlide key={id}>
                  <CarouselSlide
                    title={slideTitle}
                    description={slideDescription}
                    bg={slideBg}
                  />
                </SwiperSlide>
              )
            })
          }
          </Swiper>
      </div>
    )  
}

export default Carousel