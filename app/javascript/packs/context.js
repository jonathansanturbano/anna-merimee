import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [oeuvres, setOeuvres] = useState([]);
  const [categories, setCategories] = useState([
    "Tout",
    "Huile",
    "Acrylique",
    "Aquarelle",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getOeuvres = () => {
    axios.get("/api/v1/oeuvres").then((response) => {
      const oeuvres = response.data;
      setOeuvres(oeuvres);
    });
  };

  const filterByCategorie = (categorie) => {
    if (categorie === "Tout") {
      return getOeuvres();
    }
    axios.get("/api/v1/oeuvres").then((response) => {
      const oeuvres = response.data;
      const filteredOeuvres = oeuvres.filter(
        (oeuvre) => oeuvre.categorie == categorie
      );
      setOeuvres(filteredOeuvres);
    });
  };

  return (
    <AppContext.Provider
      value={{
        oeuvres,
        getOeuvres,
        categories,
        setCategories,
        filterByCategorie,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
