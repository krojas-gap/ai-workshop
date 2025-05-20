import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import SearchBar from '../components/SearchBar.vue'

describe('SearchBar.vue', () => {
  it('renders search bar container', () => {
    const { container } = render(SearchBar)
    expect(container.querySelector('form')).not.toBeNull()
  })

  it('emits search event on submit', async () => {
    const { getByRole, emitted } = render(SearchBar)
    const input = getByRole('searchbox')
    await fireEvent.update(input, 'laptop')
    await fireEvent.submit(getByRole('search'))
    expect(emitted()['search']).toBeTruthy()
    expect(emitted()['search'][0]).toEqual(['laptop'])
  })
})
