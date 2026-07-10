import React from 'react'
import './modal.css'

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalBox" onClick={(e) => e.stopPropagation()}>
        <button className="modalClose" onClick={onClose}>✕</button>
        <img
          src={`${import.meta.env.BASE_URL}CV 2023 full screen-1.webp`}
          alt="CV"
          className="modalImage"
        />
      </div>
    </div>
  )
}

export default Modal
