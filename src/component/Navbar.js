import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" id="nav">
      <h1 className="logo">Liam</h1> {/* Liam's Name */}

      {/* Desktop Navigation */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#nav">Home</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>

      {/* Mobile Menu Toggle Button (Hamburger) */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>
    </nav>
  );
};

export default Navbar;
