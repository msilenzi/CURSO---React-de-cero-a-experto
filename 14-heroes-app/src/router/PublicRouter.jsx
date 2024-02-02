import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '@Context'
import { Navigate } from 'react-router-dom'

function PublicRouter({ children }) {
  const { state } = useContext(AuthContext)

  return !state.logged ? children : <Navigate to="/" />
}

PublicRouter.propTypes = {
  children: PropTypes.element.isRequired,
}

export { PublicRouter }
