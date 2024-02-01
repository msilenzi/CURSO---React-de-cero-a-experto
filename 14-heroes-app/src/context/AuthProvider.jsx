import { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { authTypes } from '@Types'

function initReducer() {
  const user = localStorage.getItem('HERO-APP__user')
  return {
    logged: !!user,
    name: user,
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {}, initReducer)

  useEffect(() => {
    localStorage.setItem('HERO-APP__user', state.name)
  }, [state])

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
