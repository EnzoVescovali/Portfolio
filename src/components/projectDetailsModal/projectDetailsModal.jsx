import { useEffect, useRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import './projectDetailsModal.css'
import '../../styles/button.css'

const SECTIONS = [
  ['context', 'Contexte'],
  ['objectives', 'Objectifs'],
  ['results', 'Résultats'],
  ['improvements', 'Améliorations'],
]

const GithubIcon = () => (
  <span className="btnIcon" aria-hidden="true">
    <FaGithub />
  </span>
)

const ProjectDetailsModal = ({ isOpen, onClose, project }) => {
  const closeBtnRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const timer = setTimeout(() => closeBtnRef.current?.focus(), 0)

    const previousOverflow = document.body.style.overflow
    const previousPadding = document.body.style.paddingRight
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPadding
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  const chips = [
    ...(project.stack || []).map((item) => ({
      text: item,
      className: 'chip',
    })),
    ...(project.skills || []).map((item) => ({
      text: item,
      className: 'chip chip--alt',
    })),
  ]

  return (
    <div
      className="projectModalOverlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Détails du projet"
    >
      <div
        className="projectModalBox"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          className="projectModalClose"
          onClick={onClose}
          aria-label="Fermer"
          type="button"
        >
          ✕
        </button>

        <header className="projectModalHeader">
          <div className="projectModalImageWrap">
            <img
              className="projectModalImage"
              src={project.image}
              alt={project.title}
            />
          </div>

          <div className="projectModalLinksOutsideImage">
            <div className="projectModalTitleWrap">
              <h3 className="projectModalTitle">
                {project.title}
              </h3>

              {chips.length > 0 && (
                <div className="projectModalChips">
                  {chips.map((chip, index) => (
                    <span
                      key={index}
                      className={chip.className}
                    >
                      {chip.text}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {project.github && (
              <a
                className="btn btnPrimary projectModalBtn"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btnContent btnDefault">
                  Voir le code
                  <GithubIcon />
                </span>

                <span className="btnContent btnHover" aria-hidden="true">
                  Voir le code
                  <GithubIcon />
                </span>
              </a>
            )}
          </div>
        </header>

        <div className="projectModalBody">
          {SECTIONS.map(([key, title]) =>
            project[key] ? (
              <section key={key} className="projectSection">
                <h4>{title}</h4>
                <p>{project[key]}</p>
              </section>
            ) : null
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsModal