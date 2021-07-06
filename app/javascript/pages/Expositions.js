import React, { useEffect } from "react";

const Expositions = () => {
  useEffect(() => {
    document.title = "Anna Mérimée | Expositions";
    document.getElementsByTagName("meta").description.content =
      "Les expositions dans lesquelles ses oeuvres ont été présentées";
  }, []);
  return (
    <div className="container">
      <div className="wrapper">
        <main>
          <h1 className="text-center">Expositions</h1>
          <ul className="expositions-list">
            <li>Galerie Lee - Rue Visconti (2015)</li>
            <li>Galerie Étienne de Caussen - rue de Seine (2001)</li>
            <li>L'Escuderia - Palazzo Ruspoli Rome (1998)</li>
            <li>Galerie Malmaison - Monaco (1997)</li>
            <li>Dillon Gallery - Soho New York (1995)</li>
            <li>Patrice Landau - New York (1994)</li>
            <li>Galerie Basamat - Casablanca (1994)</li>
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Expositions;
