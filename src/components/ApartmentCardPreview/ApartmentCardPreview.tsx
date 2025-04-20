import React from 'react'
import { Apartment } from '../../types'
import './apartmentCardPreview.css'
import { formatPrice } from '../../utils/formatPrice'

interface ApartmentCardPreviewProp extends Apartment {
  className?: string
}

const ApartmentCardPreview: React.FC<ApartmentCardPreviewProp> = ({
  building,
  floor,
  type,
  price,
  image,
  className,
}) => {
  return (
    <div className={`apartment-preview ${className || ''}`}>
      <div className="apartment-preview__label">
        <span className="apartment-preview__building">дом {building}</span>
        <span className="apartment-preview__floor">эт. {floor}</span>
      </div>

      <div className="apartment-preview__header">
        <span className="apartment-preview__type">{type}</span>
      </div>

      <div className="apartment-preview__image">
        <img
          src={image}
          alt={`Планировка квартиры: ${type}, дом ${building}, этаж ${floor}`}
          className="apartment-preview__plan"
        />
      </div>

      <div className="apartment-preview__details">
        <span className="apartment-preview__price">{formatPrice(price)}</span>
      </div>
    </div>
  )
}

export default ApartmentCardPreview
