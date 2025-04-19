import { Apartment } from '../../types'
import ApartmentCardPreview from '../ApartmentCardPreview'
import './apartmentCard.css'

interface ApartmentCardContentProps {
  apartment: Apartment
  handleOpenModal: () => void
  isModalOpen: boolean
}

const ApartmentCardContent: React.FC<ApartmentCardContentProps> = ({
  apartment: { building, floor, type, price, image },
  handleOpenModal,
  isModalOpen,
}) => {
  return (
    <div
      className="apartment-card__content"
      role="button"
      tabIndex={0}
      onClick={handleOpenModal}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleOpenModal()
        }
      }}
      aria-label={`Подробнее о квартире, ${type}, ${price}`}
      aria-pressed={isModalOpen}
    >
      <ApartmentCardPreview
        building={building}
        floor={floor}
        cardImg={image}
        type={type}
        price={price}
      />
    </div>
  )
}

export default ApartmentCardContent
