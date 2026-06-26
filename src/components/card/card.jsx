import React from 'react'
import "./card.css"

const Card = ({ title, image, link, tag }) => {
  return (
    <>
        <a href={link} target="_blank" rel="noopener noreferrer" className="card">
            <article>
              <div className="imgWrapper">
                <img src={image} alt="" />
              </div>
              <div className="test">
                <h3>{title}</h3>
                <div className="tags">
                  {tag.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
          </article>
        </a>
    </>
  )
}

export default Card