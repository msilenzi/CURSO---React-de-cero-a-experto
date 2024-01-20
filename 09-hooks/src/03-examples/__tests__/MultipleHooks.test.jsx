import { fireEvent, render, screen } from '@testing-library/react'
import MultipleHooks from '03-examples/MultipleHooks'
import { useCounter, useFetch } from '@Hooks'

jest.mock('@Hooks/useFetch')
jest.mock('@Hooks/useCounter')

describe('Pruebas en <MultipleHooks />', () => {
  const mockIncrement = jest.fn()
  const mockDecrement = jest.fn()
  const mockReset = jest.fn()

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
    decrement: mockDecrement,
    reset: mockReset,
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('debe mostrar el componente cargando un quote', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      errors: [],
    })

    render(<MultipleHooks />)

    expect(
      screen.getByRole('heading', { name: 'Breaking Bad Quotes' })
    ).toBeInTheDocument()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '−' })).toBeDisabled()
    expect(screen.getByRole('button', { name: '↺' })).toBeDisabled()
    expect(screen.getByRole('button', { name: '+' })).toBeDisabled()
  })

  test('debe mostrar un quote', () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote: 'I am not in danger, Skyler. I AM the danger!',
          author: 'Walter White',
        },
      ],
      isLoading: false,
      errors: [],
    })

    render(<MultipleHooks />)
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: '−' })).toBeDisabled()
    expect(screen.getByRole('button', { name: '↺' })).toBeEnabled()
    expect(screen.getByRole('button', { name: '+' })).toBeEnabled()
  })

  test('debe llamar a la función de incrementar', () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote: 'I am not in danger, Skyler. I AM the danger!',
          author: 'Walter White',
        },
      ],
      isLoading: false,
      errors: [],
    })

    render(<MultipleHooks />)
    const btn = screen.getByRole('button', { name: '+' })
    fireEvent.click(btn)
    expect(mockIncrement).toHaveBeenCalledOnce()
  })
})
