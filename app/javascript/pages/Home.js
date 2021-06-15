import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <main>
        <h1>Anna Merimée</h1>
        <Link to="/oeuvres">
          <p>Découvrir les tableaux</p>
        </Link>
      </main>
    </div>
  );
};

export default Home;
