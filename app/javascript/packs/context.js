import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [pieces, setPieces] = useState([]);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { isLinkOpen, setIsLinkOpen } = useState(0);

  const getPieces = () => {
    axios.get("/api/v1/pieces").then((response) => {
      const pieces = response.data;
      setPieces(pieces);
    });
  };

  return (
    <AppContext.Provider
      value={{
        pieces,
        getPieces,
        isNavbarOpen,
        setIsNavbarOpen,
        isLinkOpen,
        setIsLinkOpen,
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
