import { Link } from "react-router-dom";
import { useState } from "react";


export default function Navbar({height}) {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (

    <>

    <div className={`navbar navbar-${height}`}>
    
    
      <div className="navbar__container">

        {/* Logo / Brand */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img  src="/images/image.jpg" alt="" />
        </Link>

        {/* Navigation Links */}
        <nav className={`navbar__menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
           <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
             <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
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