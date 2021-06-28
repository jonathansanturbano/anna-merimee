import React, { useEffect } from "react";
import Card from "./Card";
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
        return <Card key={oeuvre.id} {...oeuvre} />;
      })}
    </div>
  );
};

export default Cards;
