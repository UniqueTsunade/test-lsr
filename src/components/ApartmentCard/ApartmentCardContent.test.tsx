import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ApartmentCardContent from './ApartmentCardContent'

const apartmentData = {
  building: '130',
  floor: '32/2',
  type: '3-комнатная квартира',
  price: 32428252,
  image: '/test-image.jpg',
  description: 'Пример описания квартиры для тестирования.',
}

describe('ApartmentCardContent', () => {
  it('должен вызвать handleOpenModal при клике вне кнопки', async () => {
    const user = userEvent.setup()
    const handleOpenModal = jest.fn()

    render(
      <ApartmentCardContent
        apartment={apartmentData}
        handleOpenModal={handleOpenModal}
        isModalOpen={false}
      />
    )

    const card = screen.getByRole('button')
    await user.click(card)

    expect(handleOpenModal).toHaveBeenCalled()
  })

  it('не вызывает handleOpenModal при клике по кнопке внутри', async () => {
    const user = userEvent.setup()
    const handleOpenModal = jest.fn()

    render(
      <ApartmentCardContent
        apartment={apartmentData}
        handleOpenModal={handleOpenModal}
        isModalOpen={false}
      >
        <button>Кнопка</button>
      </ApartmentCardContent>
    )

    const button = screen.getByRole('button', { name: 'Кнопка' })
    await user.click(button)

    expect(handleOpenModal).not.toHaveBeenCalled()
  })

  it('вызывает handleOpenModal при нажатии клавиш Enter/Space', async () => {
    const user = userEvent.setup()
    const handleOpenModal = jest.fn()

    render(
      <ApartmentCardContent
        apartment={apartmentData}
        handleOpenModal={handleOpenModal}
        isModalOpen={false}
      />
    )

    const card = screen.getByRole('button')
    card.focus()

    await user.keyboard('{Enter}')
    expect(handleOpenModal).toHaveBeenCalledTimes(1)

    await user.keyboard(' ')
    expect(handleOpenModal).toHaveBeenCalledTimes(2)
  })
  it('устанавливает корректные aria-атрибуты', () => {
    const handleOpenModal = jest.fn()

    render(
      <ApartmentCardContent
        apartment={apartmentData}
        handleOpenModal={handleOpenModal}
        isModalOpen={true}
      />
    )

    const card = screen.getByRole('button')
    expect(card).toHaveAttribute('aria-pressed', 'true')
    expect(card).toHaveAttribute(
      'aria-label',
      expect.stringContaining(apartmentData.type)
    )
    expect(card).toHaveAttribute(
      'aria-label',
      expect.stringContaining('Подробнее')
    )
  })
})
