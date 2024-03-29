import { useEffect, useMemo } from 'react'
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
import { useForm } from '@Hooks'
import { AuthLayout } from '@Auth/layout'
import { PasswordField, PasswordStrength } from '@Auth/components'
import { isValidEmail, isValidPassword } from '@Auth/utils'
import { startCreatingUserWithEmailAndPassword } from '@Store/auth'

import './RegisterPage.css'

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const initialFormValidations = {
  firstName: {
    validator: (value) => value.trim().length > 0,
    message: 'First name is required',
  },
  lastName: {
    validator: (value) => value.trim().length > 0,
    message: 'Last name is required',
  },
  email: {
    validator: isValidEmail,
    message: 'Invalid email address.',
  },
  password: {
    validator: isValidPassword,
    message: 'Invalid password',
  },
  confirmPassword: {
    validator: null,
    message: 'Passwords must match',
  },
}

function RegisterPage() {
  const dispatch = useDispatch()

  const { status, errorMessage } = useSelector((state) => state.auth)

  const isCheckingAuthentication = useMemo(
    () => status === 'checking',
    [status]
  )

  const {
    formState,
    formErrors,
    handleInputChange,
    handleInputValidation,
    validate,
    setFormValidation,
    validateForm,
  } = useForm(initialFormData, initialFormValidations)

  useEffect(() => {
    setFormValidation('confirmPassword', {
      validator: (value) => formState.password === value,
    })
  }, [formState.password, setFormValidation])

  function handleSubmit(e) {
    e.preventDefault()
    if (!validateForm()) return

    dispatch(startCreatingUserWithEmailAndPassword(formState))
  }

  return (
    <AuthLayout title="Sign up">
      <Stack spacing={2}>
        <form onSubmit={handleSubmit} noValidate>
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
                validate('confirmPassword', formState.confirmPassword)
              }}
              error={formErrors.password !== null}
              helperText={formErrors.password}
            />
            <PasswordStrength
              id="password-strength"
              password={formState.password}
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
              onBlur={handleInputValidation}
              error={formErrors.confirmPassword !== null}
              helperText={formErrors.confirmPassword}
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
              disabled={isCheckingAuthentication}
            >
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
