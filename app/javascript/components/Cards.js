import React, { useEffect } from "react";
import { useGlobalContext } from "../packs/context";

const Cards = () => {
  const {
    oeuvres,
    getOeuvres,
    categories,
    isAvailable,
    categoryFilterIndex,
  } = useGlobalContext();

  useEffect(() => {
    getOeuvres();
  }, []);

  return (
    <div className="image-cards">
      {oeuvres.map((oeuvre) => {
        if (isAvailable && oeuvre.disponible == false) {
          return;
        }
        if (
          categoryFilterIndex !== 0 &&
          oeuvre.categorie !== categories[categoryFilterIndex]
        ) {
          return;
        }
        return (
          <article key={oeuvre.id} className="image-card">
            <div>
              <img src={oeuvre.cloudinary_url} alt={oeuvre.nom} />
            </div>
            <div className="image-card-hover-container">
              <div className="image-card-hover">
                <h2>{oeuvre.nom}</h2>
                <div>
                  <p>{oeuvre.categorie}</p>
                  <div className="image-card-hover-info">
                    <p>{oeuvre.prix}€</p>
                    <p>{oeuvre.dimensions}</p>
                  </div>
                  <p>{oeuvre.disponible ? "Disponible" : "Vendu"}</p>
                </div>
              </div>
            </div>
            {/*<article key={oeuvre.id} className="card">
              <img
                src={oeuvre.cloudinary_url}
                alt={oeuvre.nom}
                style={{ width: "290px" }}
              />
              <h2>{oeuvre.nom}</h2>
              <div className="card-info">
                <p>{oeuvre.categorie}</p>
                <p>{oeuvre.prix}€</p>
                <p>{oeuvre.dimensions}</p>
              </div>
              {oeuvre.disponible ? (
                <div className="badge badge-disponible">Disponible</div>
              ) : (
                <div className="badge badge-vendu">Vendu</div>
              )}
            </article>*/}
          </article>
        );
      })}
    </div>
  );
};

export default Cards;
