import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import SideMenu from '../components/SideMenu.vue'

describe('SideMenu.vue', () => {
  it('renders aside element', () => {
    const { getByRole } = render(SideMenu)
    expect(getByRole('complementary')).toBeTruthy()
  })

  it('renders slot content if provided', () => {
    const { getByText } = render(SideMenu, {
      slots: { default: '<span>Categories</span>' },
    })
    expect(getByText('Categories')).toBeTruthy()
  })
})
