import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../packs/context";

const Navbar = () => {
  const { isNavbarOpen, setIsNavbarOpen } = useGlobalContext();
  return (
    <header>
      <Link to="/" className="logo">
        Anna Mérimée
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/oeuvres">Accueil</Link>
          </li>
          <li>
            <Link to="/oeuvres">Oeuvres</Link>
          </li>
          <li>
            <Link to="/oeuvres">Expositions</Link>
          </li>
          <li>
            <Link to="/oeuvres">À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
