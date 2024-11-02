import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormLabel from 'react-bootstrap/FormLabel'

function SignUpTab() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <FormLabel>Username</FormLabel>
        <Form.Control
          type="text"
          placeholder="Enter username"
          autoComplete="username"
        />
      </Form.Group>

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
          autoComplete="new-password"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="d-block ms-auto">
        Sign up
      </Button>
    </Form>
  )
}

export default SignUpTab
