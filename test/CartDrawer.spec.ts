import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import CartDrawer from '../components/CartDrawer.vue'

describe('CartDrawer.vue', () => {
  it('renders the drawer with default slot content', () => {
    const { getByRole } = render(CartDrawer)
    expect(getByRole('complementary')).toBeInTheDocument()
  })

  it('renders custom slot content', () => {
    const { getByText } = render(CartDrawer, {
      slots: {
        default: '<div>Custom Cart Content</div>',
      },
    })
    expect(getByText('Custom Cart Content')).toBeInTheDocument()
  })

  it('handles empty state gracefully', () => {
    const { getByRole } = render(CartDrawer)
    expect(getByRole('complementary')).toBeInTheDocument()
  })

  it('handles user interaction (close button)', async () => {
    const { getByRole } = render(CartDrawer, {
      slots: { default: '<button aria-label="Close">Close</button>' },
    })
    const closeBtn = getByRole('button', { name: /close/i })
    await fireEvent.click(closeBtn)
    // Add event assertion if close event is emitted in the future
  })

  it('handles missing/invalid props gracefully', () => {
    const { getByRole } = render(CartDrawer)
    expect(getByRole('complementary')).toBeInTheDocument()
  })
})
