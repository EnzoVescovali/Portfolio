import React, { useState } from 'react'
import TextHero from '../../components/textHero/textHero'
import Modal from '../../components/modal/modal'
import './hero.css'
import '../../styles/button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const hero = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
        <section className="sectionHero" id="hero">
          <TextHero />
          <p>
              Bienvenue sur mon portfolio de développement web.
              Je suis Enzo Vescovali, développeur front-end passionné par la création d’expériences web modernes, fluides et engageantes.
              Explorez mes projets et découvrez mon approche du développement web en tant que développeur junior, entre design, performance et souci du détail.
          </p>
          <div className="buttonsContainer">
              <a href="../../public/CV_Enzo_Vescovali.pdf" download className='btn btnSecondary'>
                <span className="btnContent btnDefault">
                  Telecharger mon CV 
                  <FontAwesomeIcon icon={faDownload} size="xl" className='heroIcon'/>
                </span>
                <span className="btnContent btnHover" aria-hidden="true">
                  Telecharger mon CV 
                  <FontAwesomeIcon icon={faDownload} size="xl" className='heroIcon'/>
                </span>
              </a>
              <button onClick={() => setShowModal(true)} className='btn btnPrimary'>
                <span className="btnContent btnDefault">
                  Voir mon CV
                  <FontAwesomeIcon icon={faEye} size="xl" className='heroIcon'/>
                </span>
                <span className="btnContent btnHover" aria-hidden="true">
                  Voir mon CV
                  <FontAwesomeIcon icon={faEye} size="xl" className='heroIcon'/>
                </span>
              </button>
          </div>
        </section>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default hero
