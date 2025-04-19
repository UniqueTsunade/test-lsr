import { useState } from 'react'
import ApartmentPlan from '../../assets/plan.png'
import './apartmentCard.css'
import FavouriteButton from '../FavouriteButton'
import ApartmentModal from '../ApartmentModal'
import ApartmentCardContent from './ApartmentCardContent'
import { Apartment } from '../../types'

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

  const apartmentData: Apartment = {
    building: 'дом 43',
    floor: 'эт. 3/32',
    type: '2-комнатная евро квартира',
    price: '14 598 252 ₽',
    image: ApartmentPlan,
  }

  return (
    <div className="apartment-card">
      <ApartmentCardContent
        apartment={apartmentData}
        handleOpenModal={handleOpenModal}
        isModalOpen={isModalOpen}
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
            apartment={apartmentData}
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
