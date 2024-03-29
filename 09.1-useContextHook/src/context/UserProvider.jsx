import PropTypes from 'prop-types'
import UserContext from './UserContext'
import { useState } from 'react'

function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UserProvider
