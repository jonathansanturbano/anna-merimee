import React, { useEffect } from "react";
import Filters from "../components/Filters";
import Cards from "../components/Cards";

const Oeuvres = () => {
  useEffect(() => {
    document.title = "Anna Mérimée | Oeuvres";
    document.getElementsByTagName("meta").description.content =
      "Découvrez sur cette page les oeuvres d'Anna Mérimée. Filtrez selon les types de tableaux (acrylique, aquarelle, encre ou pastel) et vérifiez leur disponibilité.";
  }, []);

  return (
    <>
      <Filters />
      <div className="container">
        <main>
          <Cards />
        </main>
      </div>
    </>
  );
};

export default Oeuvres;
