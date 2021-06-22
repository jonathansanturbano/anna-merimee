import React, { useEffect } from "react";
import { useGlobalContext } from "../packs/context";
import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation, A11y]);

const PhotoCarousel = () => {
  const { carouselImages } = useGlobalContext();

  return (
    <div className="wrapper">
      <div className="container">
        <Swiper spaceBetween={50} slidesPerView={1} navigation>
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
