import { useState } from 'react'
import ApartmentPlan from '../../assets/plan.png'
import './apartmentCard.css'

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

      <div className="apartment-card__favourite">
        <button
          type="button"
          className={`apartment-card__favourite-btn ${isFavourite ? 'apartment-card__favourite-btn--is-active' : ''}`}
          aria-label={
            isFavourite ? 'Удалить из избранного' : 'Добавить в избранное'
          }
          onClick={handleFavouriteToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="apartment-card__favourite-icon"
            aria-label="Добавить в избранное"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                   2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
                   C13.09 3.81 14.76 3 16.5 3
                   19.58 3 22 5.42 22 8.5
                   c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill={isFavourite ? 'red' : 'none'}
              stroke={isFavourite ? 'red' : 'grey'}
              strokeWidth="1"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ApartmentCard
