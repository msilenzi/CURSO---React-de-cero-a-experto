import { useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Alert,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '@Auth/layout'
import { PasswordField } from '@Auth/components'
import { useForm } from '@Hooks'
import { checkAuth, startGoogleSignIn } from '@Store/auth'
import { isValidEmail, isValidPassword } from '@Auth/utils'

const initialFormData = {
  email: '',
  password: '',
}

const initialFormValidations = {
  email: {
    validator: isValidEmail,
    message: 'Invalid email address.',
  },
  password: {
    validator: isValidPassword,
    message: 'Invalid password',
  },
}

function LoginPage() {
  const { status, errorMessage } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const {
    formState,
    formErrors,
    handleInputChange,
    handleInputValidation,
    validateForm,
  } = useForm(initialFormData, initialFormValidations)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  function handleSubmit(e) {
    e.preventDefault()
    if (!validateForm()) return

    console.log(formState)

    //! dispatch de la acción

    dispatch(checkAuth())
  }

  function handleGoogleLogin() {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
      <Stack spacing={2}>
        <form onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            <TextField
              type="text"
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
              disabled={isAuthenticating}
            />
            <PasswordField
              id="password"
              name="password"
              label="Password"
              autoComplete="current-password"
              required
              fullWidth
              value={formState.password}
              onChange={handleInputChange}
              onBlur={handleInputValidation}
              error={formErrors.password !== null}
              helperText={formErrors.password}
              disabled={isAuthenticating}
            />
            <Alert
              severity="error"
              sx={{ display: !errorMessage ? 'none' : '' }}
            >
              {errorMessage}
            </Alert>
            <Button
              variant="contained"
              size="large"
              type="submit"
              disabled={isAuthenticating}
            >
              Login
            </Button>
          </Stack>
        </form>
        <Typography sx={{ textAlign: 'center' }}>or</Typography>
        <Button
          variant="outlined"
          size="large"
          startIcon={<Google />}
          onClick={handleGoogleLogin}
          disabled={isAuthenticating}
        >
          Login with Google
        </Button>
      </Stack>
      <Link
        component={RouterLink}
        to="/auth/register"
        color="secondary.main"
        disabled={isAuthenticating}
        sx={{ textAlign: 'center', mt: 3, display: 'block' }}
      >
        Don&#39;t have an account? Sign up
      </Link>
    </AuthLayout>
  )
}

export default LoginPage
