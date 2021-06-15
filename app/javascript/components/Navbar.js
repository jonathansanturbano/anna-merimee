import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../packs/context";

const Navbar = () => {
  const { isNavbarOpen, setIsNavbarOpen } = useGlobalContext();
  return (
    <header>
      <Link to="/" className="logo">
        Home
      </Link>
      <button
        className="menu-toggle"
        aria-pressed={isNavbarOpen}
        aria-expanded={isNavbarOpen}
        aria-label="Menu"
        aria-hidden="true"
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      ></button>
      <nav>{/** <Links /> */}</nav>
    </header>
  );
};

export default Navbar;
