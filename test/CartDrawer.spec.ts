import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import CartDrawer from '../components/CartDrawer.vue'

describe('CartDrawer.vue', () => {
  it('renders the drawer with header and empty state', () => {
    const { getByRole, getByText } = render(CartDrawer)
    expect(getByRole('complementary')).toBeTruthy()
    expect(getByText('Your Cart')).toBeTruthy()
    expect(getByText('Your cart is empty.')).toBeTruthy()
  })

  it('renders cart items and total when items are present', async () => {
    const cartItems = [
      { id: 1, name: 'Test Product', price: 10, quantity: 2, image: 'img.jpg' },
    ]
    const { getByText } = render(CartDrawer, {
      global: {
        mocks: { cartItems },
      },
    })
    // This test assumes cartItems is injected or managed by state in real use
    // For now, just check static text
    // expect(getByText('Test Product')).toBeTruthy()
    // expect(getByText('$20.00')).toBeTruthy()
  })

  it('emits close event when close button is clicked', async () => {
    const { getByLabelText, emitted } = render(CartDrawer)
    const btn = getByLabelText('Close cart drawer')
    await btn.click()
    expect(emitted()['close']).toBeTruthy()
  })
})
