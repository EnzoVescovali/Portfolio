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
        <FontAwesomeIcon icon={faGithubAlt} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faBehance} />
      </div>
      <p>© 2024 <span className="footerPseudo">Vipe</span> . All rights reserved.</p>
    </footer>
  )
}

export default Footer