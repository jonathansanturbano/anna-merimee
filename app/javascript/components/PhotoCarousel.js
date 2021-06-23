import React, { useEffect } from "react";
import { useGlobalContext } from "../packs/context";
import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation, A11y, Autoplay]);

const PhotoCarousel = () => {
  const { carouselImages } = useGlobalContext();

  return (
    <div className="wrapper">
      <div className="home-container">
        <Swiper spaceBetween={50} slidesPerView={1} navigation autoplay>
          {carouselImages.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  className="carousel-image"
                  src={image.filepath}
                  alt={image.alt}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoCarousel;
