import { useReducer } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { authTypes } from '@Types'

const initialState = {
  logged: false,
  name: null,
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  function login(username) {
    dispatch({
      type: authTypes.login,
      payload: username,
    })
  }

  function logout() {
    dispatch({ type: authTypes.logout })
  }

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export { AuthProvider }
