import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import Footer from '../components/Footer.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe('Footer.vue', () => {
  it('renders footer element', () => {
    const { container } = render(Footer, {
      global: { stubs: { NuxtLink: RouterLinkStub } },
    })
    expect(container.querySelector('footer')).not.toBeNull()
  })

  it('renders My Account and Support links', () => {
    const { getByText } = render(Footer, {
      global: { stubs: { NuxtLink: RouterLinkStub } },
    })
    expect(getByText('My Account')).toBeTruthy()
    expect(getByText('Support')).toBeTruthy()
  })

  it('renders the current year', () => {
    const { getByText } = render(Footer, {
      global: { stubs: { NuxtLink: RouterLinkStub } },
    })
    const year = new Date().getFullYear().toString()
    // Use a regex to match the year in the copyright text, allowing for whitespace and the © symbol
    expect(getByText(new RegExp(`©\\s*${year}`))).toBeTruthy()
  })
})
