import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '../../src/components/Footer/Footer'

describe('Tests en <Footer />', () => {
  test('debe coincidir con el snapshot', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })

  test('debe mostrar el nombre del autor', () => {
    render(<Footer />)
    expect(screen.getByText('Manuel Silenzi')).toBeInTheDocument()
  })
})
