import ApartmentCardPreview from '../ApartmentCardPreview'

interface ApartmentCardContentProps {
  handleOpenModal: () => void
  isModalOpen: boolean
  cardImg: string
}

const ApartmentCardContent: React.FC<ApartmentCardContentProps> = ({
  handleOpenModal,
  isModalOpen,
  cardImg,
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
      aria-label="Подробнее о квартире, 2-комнатная евро, 14 598 252 ₽"
      aria-pressed={isModalOpen}
    >
      <ApartmentCardPreview cardImg={cardImg} />
    </div>
  )
}

export default ApartmentCardContent
