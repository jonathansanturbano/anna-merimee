import React, { useEffect } from "react";
import { useGlobalContext } from "../packs/context";
import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SousBois from "../images/sous-bois.jpg";
import NatureMorte from "../images/nature-morte.jpg";
import Riviere from "../images/les-bords-de-la-rivera.jpg";

SwiperCore.use([Navigation, A11y, Autoplay]);

const PhotoCarousel = () => {
  return (
    <div className="wrapper">
      <div className="home-container">
        <Swiper spaceBetween={50} slidesPerView={1} navigation autoplay speed={2500}>
          <SwiperSlide>
            <img className="carousel-image" src={SousBois} alt="Sous Bois" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="carousel-image"
              src={NatureMorte}
              alt="Nature Morte"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="carousel-image"
              src={Riviere}
              alt="Les Bords de la Rivière"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoCarousel;
