import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import ImageCarousel from '../components/ImageCarousel.vue'

describe('ImageCarousel.vue', () => {
  it('renders image carousel container', () => {
    const { container } = render(ImageCarousel)
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  it('renders slot content if provided', () => {
    const { getByText } = render(ImageCarousel, {
      slots: { default: '<span>Image 1</span>' },
    })
    expect(getByText('Image 1')).toBeInTheDocument()
  })
})
