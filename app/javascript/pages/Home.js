import React, { useEffect } from "react";
import PhotoCarousel from "../components/PhotoCarousel";

const Home = () => {
  useEffect(() => {
    document.title = "Anna Mérimée | Accueil";
    document.getElementsByTagName("meta").description.content =
      "Bienvenue sur le site d'Anna Mérimée";
  }, []);
  return <PhotoCarousel />;
};

export default Home;
