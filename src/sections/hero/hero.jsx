import React from 'react'
import TextHero from '../../components/textHero/textHero'
import './hero.css'

const hero = () => {
  return (
    <>
        <section className="sectionHero">
          <TextHero />
          <p>
              Bienvenue sur mon portfolio de développement web.
              Je suis Enzo Vescovali, développeur front-end passionné par la création d’expériences web modernes, fluides et engageantes.
              Explorez mes projets et découvrez mon approche du développement web en tant que développeur junior, entre design, performance et souci du détail.
          </p>
          <div className="buttonsContainer">
              <a href="">Voir mon CV</a>
              <a href="" download>Télécharger mon CV</a>
          </div>
        </section>
    </>
  )
}

export default hero