import { Link } from "react-router-dom";
import { useState } from "react";


export default function Navbar({height, showHomeImage}) {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (

    <>
<div className="navbar">
  <div className="navbar__container">

    {/* Logo */}
    <Link to="/" className="navbar__logo" onClick={closeMenu}>
      <img src="/images/logoNew.jpg" alt="Company logo" />
    </Link>

    {/* Navigation */}
    <nav className={`navbar__menu ${menuOpen ? "open" : ""}`}>
      <Link to="/" onClick={closeMenu}>
        Home
      </Link>

      <Link to="/services" onClick={closeMenu}>
        Services
      </Link>

      <Link to="/gallery" onClick={closeMenu}>
        Gallery
      </Link>

      <Link to="/contact" onClick={closeMenu}>
        Contact
      </Link>

      <a
        href="tel:030438303"
        className="btn-primary nav-call-btn"
        onClick={closeMenu}
      >
         Call: 06848586654
      </a>
    </nav>

    {/* Hamburger */}
    <button
      className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
      onClick={toggleMenu}
      aria-label="Toggle navigation"
      aria-expanded={menuOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

  </div>
</div>

    </>
  );
}