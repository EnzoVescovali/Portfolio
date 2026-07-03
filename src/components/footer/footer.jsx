import React from 'react'
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa"
import './footer.css'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      <div className="icons">
          <a href="https://github.com/EnzoVescovali" target="_blank" rel="noopener noreferrer" className="icon">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/enzovescovali" target="_blank" rel="noopener noreferrer" className="icon">
            <FaLinkedin size={22} />          
          </a>
          <a href="https://www.behance.net/vipedzn" target="_blank" rel="noopener noreferrer" className="icon">
            <FaBehance size={22} />
          </a>
      </div>
      <p>©{year} <span className="footerPseudo">Vipe</span>. All rights reserved.</p>
    </footer>
  )
}

export default Footer