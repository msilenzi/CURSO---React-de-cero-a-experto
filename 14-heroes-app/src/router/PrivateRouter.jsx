import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '@Context'
import { Navigate, useLocation } from 'react-router-dom'

function PrivateRouter({ children }) {
  const { state } = useContext(AuthContext)
  const { pathname, search } = useLocation()
  localStorage.setItem('HERO-APP__lastPath', pathname + search)

  return state.logged ? children : <Navigate to="/login" />
}

PrivateRouter.propTypes = {
  children: PropTypes.element.isRequired,
}

export { PrivateRouter }
