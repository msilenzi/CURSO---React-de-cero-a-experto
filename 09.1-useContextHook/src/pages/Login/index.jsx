import { useContext } from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import UserContext from '@Context/UserContext'
import { useForm } from '@Hooks/useForm'

function Login() {
  const { user, setUser } = useContext(UserContext)
  const { formState, handleInputChange } = useForm(
    user ?? {
      email: '',
      username: '',
      password: '',
    }
  )

  function handleSubmit(e) {
    e.preventDefault()
    setUser({
      email: formState.email,
      username: formState.username,
      password: formState.password,
    })
  }

  return (
    <Container>
      <h2 className="mb-4">Login</h2>
      <Form
        className="mx-auto"
        style={{ maxWidth: '400px' }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formState.email}
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            value={formState.username}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formState.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="ms-auto d-block">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Login
