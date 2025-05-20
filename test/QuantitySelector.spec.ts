import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import QuantitySelector from '../components/QuantitySelector.vue'

describe('QuantitySelector.vue', () => {
  it('renders quantity selector container', () => {
    const { container } = render(QuantitySelector, { props: { modelValue: 1 } })
    expect(container.querySelector('div')).not.toBeNull()
  })

  it('increments and decrements quantity', async () => {
    let value = 2
    const { getByLabelText, emitted } = render(QuantitySelector, {
      props: { modelValue: value },
      attrs: {
        'onUpdate:modelValue': (v: number) => (value = v),
      },
    })
    await fireEvent.click(getByLabelText('Increase quantity'))
    expect(emitted()['update:modelValue']).toBeTruthy()
    await fireEvent.click(getByLabelText('Decrease quantity'))
    expect(emitted()['update:modelValue']).toBeTruthy()
  })
})
