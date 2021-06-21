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
    <div className="cards">
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
          <article key={oeuvre.id} className="card">
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
          </article>
        );
      })}
    </div>
  );
};

export default Cards;
