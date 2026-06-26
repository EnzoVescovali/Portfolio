import React from 'react'
import Card from '../../components/card/card'
import cardApi from "../../data/api.json"
import "./projects.css"

const Projects = () => {
  return (
    <>
        <section className="sectionProjects" id="projects">
            <h2>Mes Projets</h2>
            <div className="cardsContainer">
              {cardApi.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  link={card.link}
                  tag={card.tag}
              />
              ))}
            </div>
        </section>        
    </>
  )
}

export default Projects