import { render, screen } from '@testing-library/react'
import Home from '@Pages/Home'
import UserContext from '@Context/UserContext'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en Home page', () => {
  const user = {
    email: 'jdoe@mail.com',
    username: 'jdoe',
    password: '1234',
  }

  test('Debe pedir el login', () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ user: null }}>
          <Home />
        </UserContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  test('Debe mostrar al usuario', () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ user }}>
          <Home />
        </UserContext.Provider>
      </MemoryRouter>
    )

    const userInfo = screen.getByRole('code')
    expect(userInfo.innerHTML).toContain(user.email)
    expect(userInfo.innerHTML).toContain(user.username)
    expect(userInfo.innerHTML).toContain(user.password)
  })
})
