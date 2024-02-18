import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Link, Stack, TextField, Typography } from '@mui/material'
import { AuthLayout } from '@Auth/layout'
import { PasswordField, PasswordStrength } from '@Auth/components'
import { useForm } from '@Hooks'

const formData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const formValidations = {
  firstName: {
    validator: (value) => value.trim().length > 0,
    message: 'First name is required',
  },
  lastName: {
    validator: (value) => value.trim().length > 0,
    message: 'Last name is required',
  },
  email: {
    validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: 'Invalid email address.',
  },
  password: {
    validator: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value),
    message: 'Invalid password',
  },
  confirmPassword: {
    validator: undefined,
    message: 'Passwords must match',
  },
}

function RegisterPage() {
  const {
    formState,
    formErrors,
    handleInputChange,
    handleInputValidation,
    validate,
  } = useForm(formData, formValidations)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <AuthLayout title="Sign up">
      <Stack spacing={2}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
              <TextField
                type="text"
                id="firstName"
                name="firstName"
                label="First Name"
                autoComplete="given-name"
                required
                fullWidth
                autoFocus
                value={formState.firstName}
                onChange={handleInputChange}
                onBlur={handleInputValidation}
                error={formErrors.firstName !== null}
                helperText={formErrors.firstName}
              />
              <TextField
                type="text"
                id="lastName"
                name="lastName"
                label="Last Name"
                autoComplete="family-name"
                required
                fullWidth
                value={formState.lastName}
                onChange={handleInputChange}
                onBlur={handleInputValidation}
                error={formErrors.lastName !== null}
                helperText={formErrors.lastName}
              />
            </Stack>
            <TextField
              type="email"
              id="email"
              name="email"
              label="Email Address"
              autoComplete="email"
              required
              fullWidth
              value={formState.email}
              onChange={handleInputChange}
              onBlur={handleInputValidation}
              error={formErrors.email !== null}
              helperText={formErrors.email}
            />
            <PasswordField
              id="password"
              name="password"
              label="Password"
              autoComplete="new-password"
              required
              fullWidth
              value={formState.password}
              onChange={handleInputChange}
              onBlur={(e) => {
                handleInputValidation(e)
                validate(
                  'confirmPassword',
                  formState.confirmPassword,
                  () => formState.confirmPassword === e.target.value
                )
              }}
              error={formErrors.password !== null}
              helperText={formErrors.password}
            />
            <PasswordField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm password"
              autoComplete="off"
              required
              fullWidth
              value={formState.confirmPassword}
              onChange={handleInputChange}
              onBlur={(e) =>
                handleInputValidation(
                  e,
                  () => e.target.value === formState.password
                )
              }
              error={formErrors.confirmPassword !== null}
              helperText={formErrors.confirmPassword}
            />
            <PasswordStrength password={formState.password} />
            <Button variant="contained" size="large" type="submit">
              Sign up
            </Button>
          </Stack>
        </form>
        <Typography sx={{ textAlign: 'center' }}>or</Typography>
        <Button variant="outlined" size="large" startIcon={<Google />}>
          Sign up with Google
        </Button>
      </Stack>
      <Link
        component={RouterLink}
        to="/auth/login"
        color="secondary.main"
        sx={{ textAlign: 'center', mt: 3, display: 'block' }}
      >
        Already have an account? Login
      </Link>
    </AuthLayout>
  )
}

export default RegisterPage
