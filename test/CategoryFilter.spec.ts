import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import CategoryFilter from '../components/CategoryFilter.vue'

describe('CategoryFilter.vue', () => {
  it('renders all category buttons and All Categories', () => {
    const { getByText } = render(CategoryFilter)
    expect(getByText('Laptops')).toBeTruthy()
    expect(getByText('Smartphones')).toBeTruthy()
    expect(getByText('Headphones')).toBeTruthy()
    expect(getByText('Wearables')).toBeTruthy()
    expect(getByText('All Categories')).toBeTruthy()
  })

  it('emits update:category when a category is selected', async () => {
    const { getByText, emitted } = render(CategoryFilter)
    await getByText('Laptops').click()
    expect(emitted()['update:category']).toBeTruthy()
    expect(emitted()['update:category'][0]).toEqual(['laptops'])
  })
})
