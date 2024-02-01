import { useReducer } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
  logged: false,
  name: null,
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export { AuthProvider }
