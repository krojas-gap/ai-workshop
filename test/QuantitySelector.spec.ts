import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import QuantitySelector from '../components/QuantitySelector.vue'

describe('QuantitySelector.vue', () => {
  it('renders quantity selector container', () => {
    const { container } = render(QuantitySelector)
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  it('renders slot content if provided', () => {
    const { getByText } = render(QuantitySelector, {
      slots: { default: '<span>Qty</span>' },
    })
    expect(getByText('Qty')).toBeInTheDocument()
  })
})
