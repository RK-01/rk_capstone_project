import { render, screen } from '@testing-library/react'
import BookingForm from './components/BookingForm'

test('renders MyComponent correctly', () => {
  render(<BookingForm />)
  expect(screen.getByText('First Name')).toBeInTheDocument()
})