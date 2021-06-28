import React from "react";
import { Image, Transformation, Placeholder } from "cloudinary-react";
import Spinner from "react-bootstrap/Spinner";

const Card = (oeuvre) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <>
      {imageLoaded === false && (
        <div className="loader">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      <article className="image-card">
        <Image
          src={oeuvre.cloudinary_url}
          alt={oeuvre.nom}
          onLoad={() => setImageLoaded(true)}
        >
          <Transformation quality="auto" fetchFormat="auto" />
        </Image>
        <div className="image-card-hover-container">
          <div className="image-card-hover">
            <h2>{oeuvre.nom}</h2>
            <div>
              <p className="category-tag">{oeuvre.categorie}</p>
              <div className="image-card-hover-info">
                <p>{oeuvre.prix}€</p>
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
