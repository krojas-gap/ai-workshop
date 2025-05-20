import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import SpecsTable from '../components/SpecsTable.vue'

describe('SpecsTable.vue', () => {
  it('renders specs table', () => {
    const { container } = render(SpecsTable, {
      props: { specs: { CPU: 'i7', RAM: '16GB' } },
    })
    expect(container.querySelector('table')).not.toBeNull()
    expect(container.textContent).toContain('CPU')
    expect(container.textContent).toContain('i7')
    expect(container.textContent).toContain('RAM')
    expect(container.textContent).toContain('16GB')
  })
})
