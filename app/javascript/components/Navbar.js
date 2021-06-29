import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../packs/context";

const Navbar = () => {
  const {
    isNavbarOpen,
    setIsNavbarOpen,
    isMenuOpen,
    setIsMenuOpen,
  } = useGlobalContext();
  return (
    <header>
      <NavLink to="/accueil" className="logo">
        <h1>Anna Mérimée</h1>
      </NavLink>
      <button className="hamburger" onClick={() => setIsMenuOpen(true)}>
        <i className="fas fa-bars"></i>
      </button>
      <div
        className={isMenuOpen ? "menu-container menu-open" : "menu-container"}
      >
        <button className="close-modal" onClick={() => setIsMenuOpen(false)}>
          &times;
        </button>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/accueil"
                activeClassName="underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/oeuvres"
                activeClassName="underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Oeuvres
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/expositions"
                activeClassName="underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Expositions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/a-propos"
                activeClassName="underline"
                onClick={() => setIsMenuOpen(false)}
              >
                À Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
