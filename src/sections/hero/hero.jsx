import React, { useState } from 'react'
import TextHero from '../../components/textHero/textHero'
import Modal from '../../components/modal/modal'
import './hero.css'
import '../../styles/button.css'
import { FaEye, FaFileDownload  } from "react-icons/fa"

const hero = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
        <section className="sectionHero" id="hero">
          <TextHero />
          <p>
            Je suis Enzo Vescovali, développeur Front-End passionné par la création d'interfaces web modernes, fluides et engageantes.
            on chemin jusqu'au développement est loin d'être linéaire : mise en rayon, toilettage, coiffure, secrétariat… j'explorais. C'est en aidant ma sœur sur un devoir de code que tout a basculé un week-end entier passé à apprendre, et j'avais trouvé ce que je voulais faire. J'ai suivi une formation Développeur Web Frontend chez OpenClassrooms pour en faire mon métier.
            on stack tourne autour de HTML, CSS, React et Git/GitHub. Curieux et rigoureux, je construis des interfaces pensées aussi bien pour l'utilisateur que pour le développeur qui relira le code. Ce portfolio en est la preuve concrète : conçu de A à Z en autonomie, il représente mon premier projet complet, de la structure au déploiement.
            e suis à la recherche d'un CDD pour découvrir le rythme et les enjeux du développement en entreprise. À plus long terme, je prévois d'apprendre un framework backend, d'approfondir Vue.js et de me lancer progressivement en freelance.
          </p>
          <div className="buttonsContainer">
              <a href="../../public/CV_Enzo_Vescovali.pdf" download className='btn btnSecondary'>
                <span className="btnContent btnDefault">
                  Telecharger mon CV 
                  <FaFileDownload size={22} />
                </span>
                <span className="btnContent btnHover" aria-hidden="true">
                  Telecharger mon CV 
                  <FaFileDownload size={22} />
                </span>
              </a>
              <button onClick={() => setShowModal(true)} className='btn btnPrimary'>
                <span className="btnContent btnDefault">
                  Voir mon CV
                  <FaEye size={22} />
                </span>
                <span className="btnContent btnHover" aria-hidden="true">
                  Voir mon CV
                  <FaEye size={22} />
                </span>
              </button>
          </div>
        </section>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default hero
