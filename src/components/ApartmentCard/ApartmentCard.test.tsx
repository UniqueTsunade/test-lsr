import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ApartmentCard from './ApartmentCard'

jest.mock('./ApartmentCardContent', () => {
  return function ApartmentCardContentMock() {
    return <div>ApartmentCardContent Mock</div>
  }
})

jest.mock('../ApartmentModal', () => {
  return function ApartmentModalMock(props: { onClose: () => void }) {
    return (
      <div role="dialog">
        <button onClick={props.onClose}>Закрыть</button>
      </div>
    )
  }
})

jest.mock(
  '../FavouriteButton',
  () =>
    function FavouriteButtonMock(props: {
      isFavourite: boolean
      onToggle: () => void
    }) {
      const { isFavourite, onToggle } = props
      return (
        <button onClick={onToggle} aria-pressed={isFavourite}>
          Favourite Button
        </button>
      )
    }
)

describe('ApartmentCard', () => {
  it('корректно переключает состояние избранного', async () => {
    const user = userEvent.setup()
    render(<ApartmentCard />)

    const favButton = screen.getByRole('button', { name: /favourite button/i })
    expect(favButton).toHaveAttribute('aria-pressed', 'false')

    await user.click(favButton)
    expect(favButton).toHaveAttribute('aria-pressed', 'true')
  })

  it('открывает и закрывает модальное окно', async () => {
    const user = userEvent.setup()
    render(<ApartmentCard />)

    await user.click(screen.getByRole('button', { name: /подробнее/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /закрыть/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
