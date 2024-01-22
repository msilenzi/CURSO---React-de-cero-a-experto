import { fireEvent, render, screen } from '@testing-library/react'
import UserContext from '@Context/UserContext.jsx'
import Login from '@Pages/Login'

describe('Pruebas en <Login />', () => {
  const user = {
    email: 'jdoe@mail.com',
    username: 'jdoe',
    password: '1234',
  }

  const setUserMock = jest.fn()

  function setup(user) {
    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <Login />
      </UserContext.Provider>
    )

    const inputEmail = screen.getByPlaceholderText('Enter email')
    const inputUser = screen.getByPlaceholderText('Username')
    const inputPass = screen.getByPlaceholderText('Password')
    const submitBtn = screen.getByRole('button', { type: 'submit' })

    return { inputEmail, inputUser, inputPass, submitBtn }
  }

  beforeEach(() => jest.clearAllMocks())

  test('debe mostrar el componente sin el usuario', () => {
    const { inputEmail, inputUser, inputPass } = setup(null)

    expect(inputEmail).toHaveValue('')
    expect(inputUser).toHaveValue('')
    expect(inputPass).toHaveValue('')
  })

  test('debe mostrar el componente con los datos del ususario', () => {
    const { inputEmail, inputUser, inputPass } = setup(user)

    expect(inputEmail).toHaveValue(user.email)
    expect(inputUser).toHaveValue(user.username)
    expect(inputPass).toHaveValue(user.password)
  })

  test('debe agregar al usuario al enviar el formulario', () => {
    const { submitBtn } = setup(user)

    fireEvent.click(submitBtn)
    expect(setUserMock).toHaveBeenCalledExactlyOnceWith(user)
  })
})
