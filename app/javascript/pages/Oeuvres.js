import React, { useEffect } from "react";
import Filters from "../components/Filters";
import Cards from "../components/Cards";

const Oeuvres = () => {
  useEffect(() => {
    document.title = "Anna Mérimée | Oeuvres";
    document.getElementsByTagName("meta").description.content =
      "Les différentes peintures à consulter";
  }, []);

  return (
    <>
      <div className="container">
        <Filters />
        <main>
          <Cards />
        </main>
      </div>
    </>
  );
};

export default Oeuvres;
