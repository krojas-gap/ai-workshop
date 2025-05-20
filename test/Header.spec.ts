import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import Header from '../components/Header.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe('Header.vue', () => {
  it('renders header, logo, and nav', () => {
    const { container, getByLabelText, getByText } = render(Header, {
      global: { stubs: { NuxtLink: RouterLinkStub } },
    })
    expect(container.querySelector('header')).not.toBeNull()
    expect(getByLabelText('AI Workshop Logo')).toBeTruthy()
    expect(getByLabelText('Open cart drawer')).toBeTruthy()
    // The My Account link is visually hidden (sr-only), so use getByText
    expect(getByText('My Account')).toBeTruthy()
  })

  it('emits open-cart when cart button is clicked', async () => {
    const { getByLabelText, emitted } = render(Header, {
      global: { stubs: { NuxtLink: RouterLinkStub } },
    })
    await getByLabelText('Open cart drawer').click()
    expect(emitted()['open-cart']).toBeTruthy()
  })
})
