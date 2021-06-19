import { render, screen } from '@testing-library/react'
import AbcTemplate from './AbcTemplate'

describe('#MyTemplate', () => {
  test(`renders a message within a container`, () => {
    render(<AbcTemplate message="Abc with TypeScript" />)
    const textContainer = screen.getByText(/hello abc with typescript/i)
    expect(textContainer).not.toBe(null)
  })
})
