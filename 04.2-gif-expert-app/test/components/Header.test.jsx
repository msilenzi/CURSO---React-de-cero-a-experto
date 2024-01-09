import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react/'
import Header from '../../src/components/Header/Header'

describe('Pruebas en <Header />', () => {
  test('debe coincidir con el snapshot', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
    expect(container).toHaveTextContent('GifExpertApp')
  })

  test('debe contener el título "GifExpertApp"', () => {
    render(<Header />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.innerHTML).toStrictEqual('GifExpertApp')
  })
})
