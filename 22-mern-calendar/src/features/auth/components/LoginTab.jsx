import { isValidEmail, isValidPassword } from '@Auth/helpers/validators'
import useForm from '@Hooks/useForm'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const initialLoginData = { email: '', password: '' }

const initialLoginValidations = {
  email: {
    validator: isValidEmail,
    message: 'Invalid email address.',
  },
  password: {
    validator: isValidPassword,
    message: 'Invalid password',
  },
}

function LoginTab() {
  const {
    formState,
    formErrors,
    handleInputChange,
    handleInputValidation,
    validateForm,
  } = useForm(initialLoginData, initialLoginValidations)

  function handleSubmit(e) {
    e.preventDefault()

    if (!validateForm()) return

    console.log({ formState, formErrors })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          autoComplete="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          onBlur={handleInputValidation}
          className={formErrors.email ? 'is-invalid' : ''}
        />
        {formErrors.email && (
          <Form.Control.Feedback type="invalid">
            {initialLoginValidations.email.message}
          </Form.Control.Feedback>
        )}
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
          name="password"
          value={formState.password}
          onChange={handleInputChange}
          onBlur={handleInputValidation}
          className={formErrors.password ? 'is-invalid' : ''}
        />
        {formErrors.password && (
          <Form.Control.Feedback type="invalid">
            {initialLoginValidations.password.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Button variant="primary" type="submit" className="d-block ms-auto">
        Login
      </Button>
    </Form>
  )
}

export default LoginTab
