import React from 'react'
import './apartmentCardPreview.css'

interface ApartmentCardPreviewProp {
  building: string
  floor: string
  type: string
  price: string
  cardImg: string
}

const ApartmentCardPreview: React.FC<ApartmentCardPreviewProp> = ({
  building,
  floor,
  type,
  price,
  cardImg,
}) => {
  return (
    <div className="apartment-preview">
      <div className="apartment-preview__label">
        <span className="apartment-preview__building">дом {building}</span>
        <span className="apartment-preview__floor">эт. {floor}</span>
      </div>

      <div className="apartment-preview__header">
        <span className="apartment-preview__type">{type}</span>
      </div>

      <div className="apartment-preview__image">
        <img src={cardImg} alt={type} className="apartment-preview__plan" />
      </div>

      <div className="apartment-preview__details">
        <span className="apartment-preview__price">{price}</span>
      </div>
    </div>
  )
}

export default ApartmentCardPreview
