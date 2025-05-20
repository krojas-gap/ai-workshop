import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import ProductCard from '../components/ProductCard.vue'

describe('ProductCard.vue', () => {
  it('renders product card container', () => {
    const { container } = render(ProductCard)
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  it('renders slot content if provided', () => {
    const { getByText } = render(ProductCard, {
      slots: { default: '<span>Product Name</span>' },
    })
    expect(getByText('Product Name')).toBeInTheDocument()
  })
})
