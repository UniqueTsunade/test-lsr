import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FavouriteButton from './FavouriteButton'

describe('FavouriteButton', () => {
  it('отображает правильный класс и label, если isFavourite = false', () => {
    render(<FavouriteButton isFavourite={false} onToggle={jest.fn()} />)

    const button = screen.getByRole('button', {
      name: /добавить в избранное/i,
    })
    expect(button).toBeInTheDocument()
    expect(button).not.toHaveClass('favourite-button__btn--is-active')
  })

  it('отображает активный класс и label, если isFavourite = true', () => {
    render(<FavouriteButton isFavourite={true} onToggle={jest.fn()} />)

    const button = screen.getByRole('button', {
      name: /удалить из избранного/i,
    })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('favourite-button__btn--is-active')
  })

  it('вызывает onToggle при клике', async () => {
    const onToggle = jest.fn()
    const user = userEvent.setup()

    render(<FavouriteButton isFavourite={false} onToggle={onToggle} />)

    const button = screen.getByRole('button', {
      name: /добавить в избранное/i,
    })

    await user.click(button)
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
