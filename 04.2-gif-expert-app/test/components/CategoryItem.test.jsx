import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CategoryItem from '../../src/components/CategoryItem/CategoryItem'

describe('Pruebas en <CategoryItem />', () => {
  const mockTitle = 'Pokemon'
  const mockImage = {
    url: 'https://giphy.com/images/pokeom.gif',
    height: 800,
    width: 600,
  }
  const mockUser = {
    profile_url: 'https://giphy.com/profiles/pokemon',
    avatar_url: 'https://giphy.com/avatar/pokemon',
    username: 'Pokemon Company',
  }

  test('debe coincidir con el snapshot: con usuario', () => {
    const { container } = render(
      <CategoryItem title={mockTitle} image={mockImage} user={mockUser} />
    )
    expect(container).toMatchSnapshot()
  })

  test('debe coincidir con el snapshot: sin usuario', () => {
    const { container } = render(
      <CategoryItem title={mockTitle} image={mockImage} />
    )
    expect(container).toMatchSnapshot()
  })

  test('debe mostrar el título untitled', () => {
    render(<CategoryItem title="" image={mockImage} user={mockUser} />)
    screen.getByText('Untitled')
  })

  test('debe mostrar la información del usuario', () => {
    render(<CategoryItem title={mockTitle} image={mockImage} user={mockUser} />)
    screen.getByText(mockUser.username)
  })

  test('debe mostrar la información imagen correctamente', () => {
    render(<CategoryItem title={mockTitle} image={mockImage} />)
    const image = screen.getByAltText(mockTitle)
    expect(image).toHaveAttribute('src', mockImage.url)
    expect(image).toHaveAttribute('height', mockImage.height.toString())
    expect(image).toHaveAttribute('width', mockImage.width.toString())
  })
})
