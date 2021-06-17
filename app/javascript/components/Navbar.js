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

      <button className="hamburger">
        <div>
          <p>--</p>
          <p>--</p>
          <p>--</p>
        </div>
      </button>
      <nav className="menu">
        <button className="close-modal">&times;</button>
        <ul>
          <li>
            <Link to="/home">Accueil</Link>
          </li>
          <li>
            <Link to="/oeuvres">Oeuvres</Link>
          </li>
          <li>
            <Link to="/expositions">Expositions</Link>
          </li>
          <li>
            <Link to="/a-propos">À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
