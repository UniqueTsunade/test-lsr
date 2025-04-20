import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ApartmentModal from './ApartmentModal'

const mockApartment = {
  building: '130',
  floor: '32/2',
  type: '3-комнатная квартира',
  price: 32428252,
  image: '/test-image.jpg',
  description: 'Пример описания квартиры для тестирования.',
}

const renderModal = (
  onClose = jest.fn(),
  isFavourite = false,
  onToggleFavourite = jest.fn()
) =>
  render(
    <ApartmentModal
      apartment={mockApartment}
      onClose={onClose}
      isFavourite={isFavourite}
      onToggleFavourite={onToggleFavourite}
    />
  )

test('вызывает onClose при нажатии Escape', async () => {
  const user = userEvent.setup()
  const onClose = jest.fn()

  renderModal(onClose)
  await user.keyboard('{Escape}')

  expect(onClose).toHaveBeenCalled()
})

test('вызывает onClose при клике по затемнению', async () => {
  const user = userEvent.setup()
  const onClose = jest.fn()

  renderModal(onClose)

  const overlay = screen.getByTestId('modal-overlay')
  await user.click(overlay)

  expect(onClose).toHaveBeenCalled()
})

test('не вызывает onClose при клике на контент модалки', async () => {
  const user = userEvent.setup()
  const onClose = jest.fn()

  renderModal(onClose)

  const modalContent = screen.getByTestId('modal-content')
  await user.click(modalContent)

  expect(onClose).not.toHaveBeenCalled()
})

test('отображает кнопку избранного', () => {
  renderModal()

  expect(screen.getByLabelText(/в избранное/i)).toBeInTheDocument()
})
test('рендерится корректно (snapshot)', () => {
  const { asFragment } = renderModal()
  expect(asFragment()).toMatchSnapshot()
})
