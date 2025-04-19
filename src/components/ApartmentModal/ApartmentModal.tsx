import './apartmentModal.css'

import React from 'react'
import ReactDOM from 'react-dom'
import ApartmentPlan from '../../assets/plan.png'
import ApartmentCardPreview from '../ApartmentCardPreview'
import FavouriteButton from '../FavouriteButton'

type ApartmentModalProps = {
  isFavourite: boolean
  onToggleFavourite: () => void
  onClose: () => void
}

const modalRoot = document.getElementById('modal-root')

const ApartmentModal: React.FC<ApartmentModalProps> = ({
  isFavourite,
  onToggleFavourite,
  onClose,
}) => {
  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <div
      className="apartment-modal__overlay"
      role="button"
      tabIndex={0}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClose()
        }
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        className="apartment-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="apartment-modal__close"
          aria-label="Закрыть"
          onClick={onClose}
        >
          ✕
        </button>
        <ApartmentCardPreview cardImg={ApartmentPlan} />
        <div>
          Таким образом постоянный количественный рост и сфера нашей активности
          представляет собой интересный эксперимент проверки позиций, занимаемых
          участниками в отношении поставленных задач. Не следует, однако
          забывать, что постоянное информационно-пропагандистское обеспечение
          нашей деятельности обеспечивает широкому кругу (специалистов) участие
          в формировании систем массового участия.
        </div>
        <FavouriteButton
          isFavourite={isFavourite}
          onToggle={onToggleFavourite}
        />
      </div>
    </div>,
    modalRoot
  )
}

export default ApartmentModal
