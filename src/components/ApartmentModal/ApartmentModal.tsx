import './apartmentModal.css'
import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import ApartmentCardPreview from '../ApartmentCardPreview'
import FavouriteButton from '../FavouriteButton'
import { Apartment } from '../../types'

type ApartmentModalProps = {
  apartment: Apartment
  isFavourite: boolean
  onToggleFavourite: () => void
  onClose: () => void
}

const ApartmentModal: React.FC<ApartmentModalProps> = ({
  apartment,
  isFavourite,
  onToggleFavourite,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    modalRef.current?.focus()
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (['Enter', ' ', 'Escape'].includes(e.key)) {
      e.preventDefault()
      e.stopPropagation()
      onClose()
    }
  }

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      className="apartment-modal__overlay"
      role="button"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onClick={onClose}
      data-testid="modal-overlay"
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        className="apartment-modal__content"
        data-testid="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <ApartmentCardPreview {...apartment} />
        <div className="apartment-modal__description">
          {apartment.description}
        </div>
        <div className="apartment-modal__favourite">
          <FavouriteButton
            isFavourite={isFavourite}
            onToggle={onToggleFavourite}
          />
        </div>
      </div>
    </div>,
    modalRoot
  )
}

export default ApartmentModal
