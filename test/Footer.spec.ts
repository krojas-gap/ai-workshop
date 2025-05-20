import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import Footer from '../components/Footer.vue'

describe('Footer.vue', () => {
  it('renders footer element', () => {
    const { container } = render(Footer)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('renders slot content if provided', () => {
    const { getByText } = render(Footer, {
      slots: { default: '<span>Footer Content</span>' },
    })
    expect(getByText('Footer Content')).toBeInTheDocument()
  })
})
