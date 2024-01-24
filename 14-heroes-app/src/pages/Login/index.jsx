import { PageTitle } from '@Components'
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
      <PageTitle title="Login" />
      <Button variant="primary" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  )
}

export { LoginPage }
