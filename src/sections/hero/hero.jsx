import React from 'react'
import TextHero from '../../components/textHero/textHero'
import './hero.css'
import '../../styles/button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const hero = () => {
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
              <a href="" className='btn btnPrimary'>Voir mon CV <FontAwesomeIcon icon={faEye} size="xl" className='heroIcon'/> </a>
              <a href="" download className='btn btnSecondary' data-text="Télécharger mon CV">Télécharger mon CV <FontAwesomeIcon icon={faDownload} size="xl" className='heroIcon'/> </a>
          </div>
        </section>
    </>
  )
}

export default hero
