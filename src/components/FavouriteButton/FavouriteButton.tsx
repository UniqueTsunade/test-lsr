import './favouriteButton.css'

interface FavouriteButtonProps {
  isFavourite: boolean
  onToggle: () => void
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({
  isFavourite,
  onToggle,
}) => {
  return (
    <div className="favourite-button">
      <button
        type="button"
        className={`favourite-button__btn ${
          isFavourite ? 'favourite-button__btn--is-active' : ''
        }`}
        aria-label={
          isFavourite ? 'Удалить из избранного' : 'Добавить в избранное'
        }
        onClick={onToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="favourite-button__icon"
          aria-label="Иконка избранного"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
                 C13.09 3.81 14.76 3 16.5 3
                 19.58 3 22 5.42 22 8.5
                 c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            strokeWidth="1"
          />
        </svg>
      </button>
    </div>
  )
}

export default FavouriteButton
