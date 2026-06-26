import React from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
    <>
        <nav>
            <NavLink to="/" className="logo">
                Vipe
            </NavLink>
            <ul>
                <li>
                    <a href="#hero">Accueil</a>
                </li>
                <li>
                    <a href="#projects">Projets</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default navbar
