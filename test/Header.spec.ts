import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import Header from '../components/Header.vue'

describe('Header.vue', () => {
  it('renders header element', () => {
    const { getByRole } = render(Header)
    // No role by default, so check for header tag
    expect(document.querySelector('header')).toBeInTheDocument()
  })

  it('renders slot content if provided', () => {
    const { getByText } = render(Header, {
      slots: { default: '<span>Logo</span>' },
    })
    expect(getByText('Logo')).toBeInTheDocument()
  })
})
