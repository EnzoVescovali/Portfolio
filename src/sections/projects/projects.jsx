import React, { useMemo, useState } from 'react'
import Card from '../../components/card/card'
import cardApi from '../../data/api.json'
import './projects.css'
import ProjectDetailsModal from '../../components/projectDetailsModal/projectDetailsModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = useMemo(() => cardApi || [], [])

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />

      <section className="sectionProjects" id="projects">
        <h2>Mes Projets</h2>

        <div className="cardsContainer">
          {projects.map((project, index) => (
            <Card
              key={project.id ?? index}
              project={project}
              image={project.image}
              title={project.title}
              link={project.github || project.link}
              tag={project.tag || project.stack || []}
              onOpen={openModal}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects

