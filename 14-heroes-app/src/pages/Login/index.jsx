import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  function handleLogin() {
    navigate('/', { replace: true })
  }

  return (
    <Container>
      <h1>Login</h1>
      <Button variant="primary" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  )
}

export { LoginPage }
