import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import ProductCard from '../components/ProductCard.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { RouterLinkStub } from '@vue/test-utils'

describe('ProductCard.vue', () => {
  const product = {
    id: 1,
    name: 'Test Product',
    description: 'A test product',
    price: 123.45,
    image: 'https://example.com/image.jpg'
  }
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/product/:id', component: { template: '<div />' } }
    ]
  })

  it('renders product name, description, and price', () => {
    const { getByText } = render(ProductCard, {
      props: { product },
      global: { plugins: [router], stubs: { NuxtLink: RouterLinkStub } }
    })
    expect(getByText('Test Product')).toBeTruthy()
    expect(getByText('A test product')).toBeTruthy()
    expect(getByText('$123.45')).toBeTruthy()
  })

  it('renders product image', () => {
    const { getByAltText } = render(ProductCard, {
      props: { product },
      global: { plugins: [router], stubs: { NuxtLink: RouterLinkStub } }
    })
    expect(getByAltText('Test Product')).toBeTruthy()
  })

  it('links to the product detail page', () => {
    const { getByText } = render(ProductCard, {
      props: { product },
      global: { plugins: [router], stubs: { NuxtLink: RouterLinkStub } }
    })
    const link = getByText('View')
    expect(link).toBeTruthy()
  })
})
