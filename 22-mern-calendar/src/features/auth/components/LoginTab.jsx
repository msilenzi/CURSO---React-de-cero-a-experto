import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function LoginTab() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          autoComplete="email"
        />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="d-block ms-auto">
        Login
      </Button>
    </Form>
  )
}

export default LoginTab
