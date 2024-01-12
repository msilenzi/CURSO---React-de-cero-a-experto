import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import PlaceholderedImage from '../../src/ui/PlaceholderedImage'

describe('Pruebas en <PlaceholderedImage />', () => {
  test('debe renderizarse correctamente con las props proporcionadas', () => {
    const props = {
      placeholderColor: 'red',
      alt: 'Example image',
      height: 100,
      width: 200,
      src: 'https://example.com/image.jpg',
    }

    const { container } = render(<PlaceholderedImage {...props} />)
    expect(container).toBeInTheDocument()

    const div = screen.getByTestId('PlaceholderedImage')
    expect(div).toHaveStyle({ backgroundColor: props.placeholderColor })

    const img = screen.getByAltText(props.alt)
    expect(img).toHaveAttribute('height', props.height.toString())
    expect(img).toHaveAttribute('width', props.width.toString())
    expect(img).toHaveAttribute('src', props.src)
  })

  test('al cargar debe mostrar la imagen y ocultar el fondo', () => {
    const props = {
      placeholderColor: 'red',
      alt: 'Example image',
      height: 100,
      width: 200,
      src: 'https://example.com/image.jpg',
    }

    render(<PlaceholderedImage {...props} />)
    const img = screen.getByAltText(props.alt)
    const div = screen.getByTestId('PlaceholderedImage')

    expect(img).toHaveStyle({ visibility: 'hidden' })
    expect(div).toHaveStyle({ backgroundColor: props.placeholderColor })

    fireEvent.load(img)

    expect(img).toHaveStyle({ visibility: 'visible' })
    expect(div).toHaveStyle({ backgroundColor: 'invisible' })

  })
})
