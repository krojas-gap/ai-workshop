import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import SpecsTable from '../components/SpecsTable.vue'

describe('SpecsTable.vue', () => {
  it('renders specs table', () => {
    const { container } = render(SpecsTable)
    expect(container.querySelector('table')).toBeInTheDocument()
  })

  it('renders slot content if provided', () => {
    const { getByText } = render(SpecsTable, {
      slots: { default: '<tr><td>Spec</td><td>Value</td></tr>' },
    })
    expect(getByText('Spec')).toBeInTheDocument()
    expect(getByText('Value')).toBeInTheDocument()
  })
})
