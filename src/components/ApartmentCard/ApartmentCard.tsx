import { useState } from 'react'
import ApartmentPlan from '../../assets/plan.png'
import './apartmentCard.css'
import FavouriteButton from '../FavouriteButton'
import ApartmentModal from '../ApartmentModal'
import ApartmentCardContent from './ApartmentCardContent'

const ApartmentCard = () => {
  const [isFavourite, setIsFavourite] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFavouriteToggle = () => {
    setIsFavourite((prev) => !prev)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="apartment-card">
      <ApartmentCardContent
        handleOpenModal={handleOpenModal}
        isModalOpen={isModalOpen}
        cardImg={ApartmentPlan}
      />

      <div className="apartment-card__footer">
        <button
          className="apartment-card__more"
          aria-label="Посмотреть подробнее"
          onClick={handleOpenModal}
        >
          <span className="apartment-card__more-text">Подробнее</span>
        </button>
        {isModalOpen && (
          <ApartmentModal
            isFavourite={isFavourite}
            onToggleFavourite={handleFavouriteToggle}
            onClose={handleCloseModal}
          />
        )}
      </div>

      <FavouriteButton
        isFavourite={isFavourite}
        onToggle={handleFavouriteToggle}
      />
    </div>
  )
}

export default ApartmentCard
