import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../packs/context";

const Navbar = () => {
  const {
    isNavbarOpen,
    setIsNavbarOpen,
    isModalOpen,
    setIsModalOpen,
  } = useGlobalContext();
  return (
    <header>
      <NavLink to="/accueil" className="logo">
        <h1>Anna Mérimée</h1>
      </NavLink>
      <button
        className="hamburger"
        onTouchStart={() => setIsModalOpen(!isModalOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="menu-container">
        <button className="close-modal">&times;</button>
        <nav>
          <ul>
            <li>
              <NavLink to="/accueil" activeClassName="underline">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/oeuvres" activeClassName="underline">
                Oeuvres
              </NavLink>
            </li>
            <li>
              <NavLink to="/expositions" activeClassName="underline">
                Expositions
              </NavLink>
            </li>
            <li>
              <NavLink to="/a-propos" activeClassName="underline">
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
