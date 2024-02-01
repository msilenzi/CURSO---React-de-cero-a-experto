import { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import { PageTitle } from '@Components/ui'
import { AuthContext } from '@Context'

function LoginPage() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogin() {
    login('msilenzi')
    navigate('/', { replace: true })
  }

  return (
    <Container>
      <PageTitle title="Login" />
      <Button variant="primary" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  )
}

export { LoginPage }
