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
    const path = localStorage.getItem('HERO-APP__lastPath') ?? '/'
    login('msilenzi')
    navigate(path, { replace: true })
  }

  return (
    <Container>
      <PageTitle title="Login" />
      <Button
        className="animate__animated animate__fadeInUp"
        variant="primary"
        onClick={handleLogin}
      >
        Login
      </Button>
    </Container>
  )
}

export { LoginPage }
