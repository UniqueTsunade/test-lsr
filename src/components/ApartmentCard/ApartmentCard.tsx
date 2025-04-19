import { useState } from 'react'
import ApartmentPlan from '../../assets/plan.png'
import './apartmentCard.css'
import FavouriteButton from '../FavouriteButton'

const ApartmentCard = () => {
  const [isFavourite, setIsFavourite] = useState(false)

  const handleFavouriteToggle = () => {
    setIsFavourite((prev) => !prev)
  }

  return (
    <div className="apartment-card">
      <a
        href="#!"
        className="apartment-card__link"
        aria-label="Подробнее о квартире, 2-комнатная евро, 14 598 252 ₽"
      >
        <div className="apartment-card__label">
          <span className="apartment-card__building">дом 43</span>
          <span className="apartment-card__floor">эт. 3/32</span>
        </div>

        <div className="apartment-card__header">
          <span className="apartment-card__type">
            2-комнатная евро квартира
          </span>
        </div>

        <div className="apartment-card__image">
          <img
            src={ApartmentPlan}
            alt="2-комнатная евро квартира"
            className="apartment-card__plan"
          />
        </div>

        <div className="apartment-card__details">
          <span className="apartment-card__price">14 598 252 ₽</span>
        </div>
      </a>

      <div className="apartment-card__footer">
        <a
          href="#!"
          className="apartment-card__more"
          aria-label="Посмотреть подробнее"
        >
          <span className="apartment-card__more-text">Подробнее</span>
        </a>
      </div>

      <FavouriteButton
        isFavourite={isFavourite}
        onToggle={handleFavouriteToggle}
      />
    </div>
  )
}

export default ApartmentCard
