import { useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Link, Stack, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '@Auth/layout'
import { useForm } from '@Hooks'
import { checkAuth, startGoogleSignIn } from '@Store/auth'

function LoginPage() {
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { formState, handleInputChange } = useForm({
    email: 'jdoe@mail.com',
    password: '123456',
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formState)

    dispatch(checkAuth())
  }

  function handleGoogleLogin() {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
      <Stack spacing={2}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              autoComplete="email"
              value={formState.email}
              onChange={handleInputChange}
              disabled={isAuthenticating}
            />
            <TextField
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={formState.password}
              onChange={handleInputChange}
              disabled={isAuthenticating}
            />
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
