import React, { Suspense, lazy } from "react";
import Filters from "../components/Filters";
import Cards from "../components/Cards";

const Oeuvres = () => {
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
