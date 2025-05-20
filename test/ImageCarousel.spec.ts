import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import ImageCarousel from '../components/ImageCarousel.vue'

describe('ImageCarousel.vue', () => {
  const images = [
    'https://example.com/img1.jpg',
    'https://example.com/img2.jpg'
  ]

  it('renders the first image and navigation buttons', () => {
    const { getByAltText, getByLabelText } = render(ImageCarousel, {
      props: { images }
    })
    expect(getByAltText('Product image 1')).toBeTruthy()
    expect(getByLabelText('Previous image')).toBeTruthy()
    expect(getByLabelText('Next image')).toBeTruthy()
  })

  it('navigates images when buttons are clicked', async () => {
    const { getByAltText, getByLabelText } = render(ImageCarousel, {
      props: { images }
    })
    await getByLabelText('Next image').click()
    expect(getByAltText('Product image 2')).toBeTruthy()
    await getByLabelText('Previous image').click()
    expect(getByAltText('Product image 1')).toBeTruthy()
  })
})
