import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import CategoryFilter from '../components/CategoryFilter.vue'

describe('CategoryFilter.vue', () => {
  it('renders category filter container', () => {
    const { container } = render(CategoryFilter)
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  it('renders slot content if provided', () => {
    const { getByText } = render(CategoryFilter, {
      slots: { default: '<span>Category List</span>' },
    })
    expect(getByText('Category List')).toBeInTheDocument()
  })
})
