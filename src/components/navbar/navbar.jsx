import React, { useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        Vipe
      </NavLink>

      <button
        type="button"
        className={`menu-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isOpen}
        aria-controls="navbar-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul id="navbar-menu" className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <a href="#hero" onClick={closeMenu}>Accueil</a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>Projets</a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
