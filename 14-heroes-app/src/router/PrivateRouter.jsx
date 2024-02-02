import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '@Context'
import { Navigate } from 'react-router-dom'

function PrivateRouter({ children }) {
  const { state } = useContext(AuthContext)

  return state.logged ? children : <Navigate to="/login" />
}

PrivateRouter.propTypes = {
  children: PropTypes.element.isRequired,
}

export { PrivateRouter }
