import { Apartment } from '../../types'
import { formatPriceForAria } from '../../utils/formatPrice'
import ApartmentCardPreview from '../ApartmentCardPreview'
import './apartmentCard.css'

interface ApartmentCardContentProps {
  apartment: Apartment
  handleOpenModal: () => void
  isModalOpen: boolean
}

const ApartmentCardContent: React.FC<ApartmentCardContentProps> = ({
  apartment,
  handleOpenModal,
  isModalOpen,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (['Enter', ' '].includes(e.key)) {
      handleOpenModal()
    }
  }

  const handleClick = (e: React.MouseEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      handleOpenModal()
    }
  }

  return (
    <div
      className="apartment-card__content"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Подробнее о квартире, ${apartment.type}, ${formatPriceForAria(apartment.price)}`}
      aria-pressed={isModalOpen}
    >
      <ApartmentCardPreview {...apartment} />
    </div>
  )
}

export default ApartmentCardContent
