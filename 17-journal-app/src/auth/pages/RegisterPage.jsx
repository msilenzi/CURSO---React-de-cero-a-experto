import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '@Auth/layout'
import { Google } from '@mui/icons-material'
import { Button, Link, Stack, TextField, Typography } from '@mui/material'
import { PasswordField, PasswordStrength } from '@Auth/components'
import { useForm } from '@Hooks'

const formData = {
  email: 'jdoe@email.com',
  password: '123456',
  confirmPassword: '123456',
  firstName: 'John',
  lastName: 'Doe',
}

function RegisterPage() {
  const { formState, handleInputChange } = useForm(formData)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <AuthLayout title="Sign up">
      <Stack spacing={2}>
        <form>
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
