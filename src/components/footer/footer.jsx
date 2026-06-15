import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="icons">
          <a href="https://github.com/EnzoVescovali" target="_blank" rel="noopener noreferrer" className="icon">
            <FontAwesomeIcon icon={faGithubAlt} size="xl"/>
          </a>
          <a href="https://www.linkedin.com/in/enzovescovali" target="_blank" rel="noopener noreferrer" className="icon">
            <FontAwesomeIcon icon={faLinkedinIn} size="xl"/>
          </a>
          <a href="https://www.behance.net/vipedzn" target="_blank" rel="noopener noreferrer" className="icon">
            <FontAwesomeIcon icon={faBehance} size="xl"/>
          </a>
      </div>
      <p>© 2024 <span className="footerPseudo">Vipe</span>. All rights reserved.</p>
    </footer>
  )
}

export default Footer