import { isValidEmail, isValidPassword } from '@Auth/helpers/validators'
import useForm from '@Hooks/useForm'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormLabel from 'react-bootstrap/FormLabel'

const initialSignUpData = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const initialSignUpValidations = {
  username: {
    validator: (value) => value.trim().length >= 3,
    message: 'Username must be at least 3 characters long',
  },
  email: {
    validator: isValidEmail,
    message: 'Invalid email address.',
  },
  password: {
    validator: isValidPassword,
    message:
      'Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one number.',
  },
  confirmPassword: {
    validator: (value, state) => value === state.password,
    message: 'Passwords must match',
  },
}

function SignUpTab() {
  const {
    formState,
    formErrors,
    handleInputChange,
    handleInputValidation,
    validateForm,
    validate,
  } = useForm(initialSignUpData, initialSignUpValidations)

  function handleSubmit(e) {
    e.preventDefault()
    validateForm()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <FormLabel>Username</FormLabel>
        <Form.Control
          type="text"
          placeholder="Enter username"
          autoComplete="username"
          name="username"
          value={formState.username}
          onChange={handleInputChange}
          onBlur={handleInputValidation}
          className={formErrors.username ? 'is-invalid' : ''}
        />
        {formErrors.username && (
          <Form.Control.Feedback type="invalid">
            {initialSignUpValidations.username.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>

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
            {initialSignUpValidations.email.message}
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
          autoComplete="new-password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
          onBlur={(e) => {
            handleInputValidation(e)
            validate('confirmPassword', formState.confirmPassword)
          }}
          className={formErrors.password ? 'is-invalid' : ''}
        />
        {formErrors.password && (
          <Form.Control.Feedback type="invalid">
            {initialSignUpValidations.password.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete="off"
          name="confirmPassword"
          value={formState.confirmPassword}
          onChange={handleInputChange}
          onBlur={handleInputValidation}
          className={formErrors.confirmPassword ? 'is-invalid' : ''}
        />
        {formErrors.confirmPassword && (
          <Form.Control.Feedback type="invalid">
            {initialSignUpValidations.confirmPassword.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Button variant="primary" type="submit" className="d-block ms-auto">
        Sign up
      </Button>
    </Form>
  )
}

export default SignUpTab
