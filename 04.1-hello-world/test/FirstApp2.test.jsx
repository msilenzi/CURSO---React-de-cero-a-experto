import { render, screen } from '@testing-library/react'
import FirstApp from '../src/FirstApp'

describe('Pruebas en <FirstApp /> 2', () => {
  const title = 'Hola, Mundo!'
  const subtitle = 'Soy un subtítulo'

  test('debe coincidir con el snapshot', () => {
    const { container } = render(<FirstApp title={title} />)
    expect(container).toMatchSnapshot()
  })

  test('debe mostrar el mensaje "Hola, Mundo!"', () => {
    render(<FirstApp title={title} />)
    expect(screen.getByText(title)).toBeTruthy()
  })

  test('debe mostrar el título en un h1', () => {
    render(<FirstApp title={title} />)
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(title)
  })

  test('debe mostrar el subtitulo enviado por props', () => {
    render(<FirstApp title={title} subtitle={subtitle} />)
    expect(screen.getAllByText(subtitle).length).toBe(1)
  })
})
