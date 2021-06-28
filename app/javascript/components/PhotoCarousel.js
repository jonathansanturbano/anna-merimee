import React, { useEffect } from "react";
import { useGlobalContext } from "../packs/context";
import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Fenetre from "../images/fenetre.jpg";
import Terrasse from "../images/la-terrasse.jpg";
import Riviere from "../images/les-bords-de-la-rivera.jpg";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation, A11y, Autoplay]);

const PhotoCarousel = () => {
  return (
    <div className="wrapper">
      <div className="home-container">
        <Swiper spaceBetween={50} slidesPerView={1} navigation autoplay>
          <SwiperSlide>
            <img className="carousel-image" src={Fenetre} alt="fenetre" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="carousel-image" src={Terrasse} alt="terrasse" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="carousel-image"
              src={Riviere}
              alt="les-bords-de-la-rivera"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoCarousel;
