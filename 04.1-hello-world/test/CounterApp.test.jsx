import { render, screen, fireEvent } from '@testing-library/react'
import CounterApp from '../src/CounterApp'

describe('Pruebas en <CounterApp />', () => {
  test('debe coincidir con el snapshot', () => {
    const { container } = render(<CounterApp initialValue={100} />)
    expect(container).toMatchSnapshot()
  })

  test('debe mostrar el valor inicial de 100', () => {
    render(<CounterApp initialValue={100} />)
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe('100')
  })

  test('debe incrementar el contador', () => {
    render(<CounterApp initialValue={10} />)
    fireEvent.click(screen.getByRole('button', { name: '+' }))
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe('11')
  })

  test('debe decrementar el contador', () => {
    render(<CounterApp initialValue={10} />)
    fireEvent.click(screen.getByRole('button', { name: '-' }))
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe('9')
  })

  test('debe resetear el contador', () => {
    render(<CounterApp initialValue={10} />)
    
    fireEvent.click(screen.getByRole('button', { name: '+' }))
    fireEvent.click(screen.getByRole('button', { name: '+' }))
    fireEvent.click(screen.getByRole('button', { name: '+' }))

    fireEvent.click(screen.getByRole('button', { name: 'reset' }))

    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe('10')
  })
})
