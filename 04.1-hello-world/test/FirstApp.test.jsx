import FirstApp from '../src/FirstApp'
import { render } from '@testing-library/react'

describe('Pruebas en <FirstApp />', () => {
  test('debe coincidir con el snapshot', () => {
    const title = 'Hola, Mundo!'
    const { container } = render(<FirstApp title={title} />)
    expect(container).toMatchSnapshot()
  })

  test('debe mostrar el título en un h1', () => {
    const title = 'Hola, Mundo!'
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    )

    expect(getByText(title)).toBeTruthy()

    const h1 = container.querySelector('h1')
    expect(h1.innerHTML).toContain(title)

    expect(getByTestId('test-title').innerHTML).toBe(title)
  })

  test('debe mostrar el subtitulo enviado por props', () => {
    const title = 'Hola, Mundo!'
    const subtitle = 'Soy un subtítulo'

    const { getByText } = render(<FirstApp title={title} subtitle={subtitle} />)

    expect(getByText(subtitle)).toBeTruthy()
  })
})
