import React from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
    <>
        <nav>
            <a href="">Vipe</a>
            <ul>
                <li>
                    <a href="">Accueil</a>
                </li>
                <li>
                    {/* <a href="#projets">Projets</a> */}
                    <NavLink to="/projects">Projets</NavLink>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default navbar
