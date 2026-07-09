import './card.css'

const Card = ({ project, title, image, link, tag = [], onOpen }) => {
  const handleClick = (e) => {
    // On veut ouvrir la modal au click et ne pas naviguer.
    e.preventDefault()
    onOpen?.(project)
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
      onClick={handleClick}
    >
      <article>
        <div className="imgWrapper">
          <img src={image} alt="" />
        </div>

        <div className="test">
          <h3>{title}</h3>
          <div className="tags">
            {tag.map((t, index) => (
              <span key={index} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  )
}

export default Card

