import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from 'App'

describe('Pruebas en <App />', () => {
  test('Debe mostrar el Home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Home', { selector: 'h2' })).toBeInTheDocument()
  })

  test('Debe mostrar el Login page', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Login', { selector: 'h2' })).toBeInTheDocument()
  })

  test('Debe mostrar el About page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('About', { selector: 'h2' })).toBeInTheDocument()
  })

  test('Debe mostrar el About page por defecto', () => {
    render(
      <MemoryRouter initialEntries={['/foo']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('About', { selector: 'h2' })).toBeInTheDocument()
  })
})
