import { render, screen } from '@testing-library/react'
import MyTemplate from './MyTemplate'

describe('#MyTemplate', () => {
  test(`renders a message within a container`, () => {
    render(<MyTemplate message="React with TypeScript" />)
    const textContainer = screen.getByText(/hello react with typescript/i)
    expect(textContainer).not.toBe(null)
  })
})
