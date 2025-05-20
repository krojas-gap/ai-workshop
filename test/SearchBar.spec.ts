import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import SearchBar from '../components/SearchBar.vue'

describe('SearchBar.vue', () => {
  it('renders search bar container', () => {
    const { container } = render(SearchBar)
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  it('renders slot content if provided', () => {
    const { getByText } = render(SearchBar, {
      slots: { default: '<input placeholder="Search" />' },
    })
    expect(getByText((content, element) => element.tagName === 'INPUT')).toBeInTheDocument()
  })
})
