import React from "react";
import { Carousel } from "react-responsive-carousel";

const PhotoCarousel = () => {
  return (
    <div className="carousel">
      <div>
        <img className="carousel-image" src="assets/fenetre.jpg" />
      </div>
      <div>
        <img
          className="carousel-image"
          src="assets/les-bords-de-la-rivera.jpg"
        />
      </div>
      <div>
        <img className="carousel-image" src="assets/la-terrasse.jpg" />
      </div>
    </div>
  );
};

export default PhotoCarousel;
