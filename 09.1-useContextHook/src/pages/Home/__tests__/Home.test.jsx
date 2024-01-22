import { render, screen } from '@testing-library/react'
import Home from '@Pages/Home'
import UserContext from '@Context/UserContext'
import { BrowserRouter } from 'react-router-dom'

describe('Pruebas en Home page', () => {
  const user = {
    email: 'jdoe@mail.com',
    username: 'jdoe',
    password: '1234',
  }

  test('Debe pedir el login', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ user: null }}>
          <Home />
        </UserContext.Provider>
      </BrowserRouter>
    )

    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  test('Debe mostrar al usuario', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ user }}>
          <Home />
        </UserContext.Provider>
      </BrowserRouter>
    )

    const userInfo = screen.getByRole('code')
    expect(userInfo.innerHTML).toContain(user.email)
    expect(userInfo.innerHTML).toContain(user.username)
    expect(userInfo.innerHTML).toContain(user.password)
  })
})
