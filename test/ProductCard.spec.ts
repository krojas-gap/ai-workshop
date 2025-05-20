import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import ProductCard from '../components/ProductCard.vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@testing-library/jest-dom'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/product/:id', component: { template: '<div />' } }
  ]
})

describe('ProductCard.vue', () => {
  const product = {
    id: 1,
    name: 'Test Product',
    description: 'A test product',
    price: 123.45,
    image: 'https://example.com/image.jpg'
  }

  it('renders product name, description, and price', () => {
    const { getByText } = render(ProductCard, {
      props: { product },
      global: { plugins: [router] }
    })
    expect(getByText('Test Product')).toBeInTheDocument()
    expect(getByText('A test product')).toBeInTheDocument()
    expect(getByText('$123.45')).toBeInTheDocument()
  })

  it('renders product image', () => {
    const { getByAltText } = render(ProductCard, {
      props: { product },
      global: { plugins: [router] }
    })
    expect(getByAltText('Test Product')).toBeInTheDocument()
  })

  it('links to the product detail page', async () => {
    const { getByRole } = render(ProductCard, {
      props: { product },
      global: { plugins: [router] }
    })
    const link = getByRole('link', { name: /view/i })
    expect(link.getAttribute('href')).toBe('/product/1')
  })
})
