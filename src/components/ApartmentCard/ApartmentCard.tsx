import { useState } from 'react'
import ApartmentPlan from '../../assets/plan.png'
import './apartmentCard.css'
import FavouriteButton from '../FavouriteButton'
import ApartmentModal from '../ApartmentModal'
import ApartmentCardContent from './ApartmentCardContent'
import { Apartment } from '../../types'
import { useModal } from '../../hooks/useModal'

const apartmentData: Apartment = {
  building: '43',
  floor: '3/32',
  type: '2-комнатная евро квартира',
  price: 14598252,
  image: ApartmentPlan,
  description:
    'Таким образом постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.',
}

const ApartmentCard = () => {
  const [isFavourite, setIsFavourite] = useState(false)

  const handleFavouriteToggle = () => {
    setIsFavourite((prev) => !prev)
  }

  const {
    isOpen: isModalOpen,
    open: handleOpenModal,
    close: handleCloseModal,
  } = useModal()

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

      <div className="apartment-card__favourite">
        <FavouriteButton
          isFavourite={isFavourite}
          onToggle={handleFavouriteToggle}
        />
      </div>
    </div>
  )
}

export default ApartmentCard
