import React, { useEffect } from "react";
import Filters from "./Filters";
import { useGlobalContext } from "../packs/context";

const Oeuvres = () => {
  const { oeuvres, getOeuvres } = useGlobalContext();

  useEffect(() => {
    getOeuvres();
  }, []);

  return (
    <>
      <div className="container">
        <Filters />
        <main>
          <div className="cards">
            {oeuvres.map((oeuvre) => {
              return (
                <article key={oeuvre.id} className="card">
                  <div className="card-info"></div>
                  <img
                    src={oeuvre.cloudinary_url}
                    alt={oeuvre.nom}
                    style={{ width: "300px" }}
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
        </main>
      </div>
    </>
  );
};

export default Oeuvres;
