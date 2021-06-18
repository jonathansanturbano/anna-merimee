import React from "react";

const PhotoCarousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-image-container before">
        <img className="carousel-image" src="assets/fenetre.jpg" />
      </div>
      <div className="carousel-image-container active">
        <img
          className="carousel-image"
          src="assets/les-bords-de-la-rivera.jpg"
        />
      </div>
      <div className="carousel-image-container next">
        <img className="carousel-image" src="assets/la-terrasse.jpg" />
      </div>
    </div>
  );
};

export default PhotoCarousel;
