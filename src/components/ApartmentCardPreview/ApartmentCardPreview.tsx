import React from 'react'

interface ApartmentCardPreviewProp {
  cardImg: string
}

const ApartmentCardPreview: React.FC<ApartmentCardPreviewProp> = ({
  cardImg,
}) => {
  return (
    <div>
      <div className="apartment-card__label">
        <span className="apartment-card__building">дом 43</span>
        <span className="apartment-card__floor">эт. 3/32</span>
      </div>

      <div className="apartment-card__header">
        <span className="apartment-card__type">2-комнатная евро квартира</span>
      </div>

      <div className="apartment-card__image">
        <img
          src={cardImg}
          alt="2-комнатная евро квартира"
          className="apartment-card__plan"
        />
      </div>

      <div className="apartment-card__details">
        <span className="apartment-card__price">14 598 252 ₽</span>
      </div>
    </div>
  )
}

export default ApartmentCardPreview
