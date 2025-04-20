export const formatPrice = (price: number, currency: string = '₽') => {
  return (
    new Intl.NumberFormat('ru-RU', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(price) + ` ${currency}`
  )
}

export const formatPriceForAria = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' рублей'
}
