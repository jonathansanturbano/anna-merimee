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
  const [categoryFilterIndex, setCategoryFilterIndex] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getOeuvres = () => {
    axios.get("/api/v1/oeuvres").then((response) => {
      setOeuvres(response.data);
    });
  };

  return (
    <AppContext.Provider
      value={{
        oeuvres,
        getOeuvres,
        categories,
        categoryFilterIndex,
        setCategoryFilterIndex,
        isModalOpen,
        setIsModalOpen,
        isAvailable,
        setIsAvailable,
        isMenuOpen,
        setIsMenuOpen,
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
