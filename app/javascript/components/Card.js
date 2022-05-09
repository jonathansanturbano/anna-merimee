import React from "react";
import { Image, Transformation, Placeholder } from "cloudinary-react";
// import Spinner from "react-bootstrap/Spinner";

const Card = (oeuvre) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <>
      <article className="image-card">
        {imageLoaded === false && (
          <div className="loader">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        <Image
          src={oeuvre.cloudinary_url}
          alt={oeuvre.nom}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          style={imageLoaded ? { opacity: "1" } : { opacity: "0" }}
        ></Image>
        <div className="image-card-hover-container">
          <div className="image-card-hover">
            <div>
              <h2>{oeuvre.nom}</h2>
              <h3>{oeuvre.prix}</h3>
            </div>
            <div>
              <p className="category-tag">{oeuvre.categorie}</p>
              <div className="image-card-hover-info">
                <p>{oeuvre.dimensions}</p>
              </div>
              <p className="sold-tag">
                {oeuvre.disponible ? "Disponible" : "Vendu"}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
