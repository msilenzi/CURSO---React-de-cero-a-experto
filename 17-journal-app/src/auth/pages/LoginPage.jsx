import { Link as RouterLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Link, Stack, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '@Auth/layout'
import { useForm } from '@Hooks'
import { checkAuth, startGoogleSignIn } from '@Store/auth'

function LoginPage() {
  const dispatch = useDispatch()
  const { formState, handleInputChange } = useForm({
    email: 'jdoe@mail.com',
    password: '123456',
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formState)

    dispatch(checkAuth())
  }

  function handleGoogleLogin() {
    console.log('Google login')
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
            />
            <Button variant="contained" size="large" type="submit">
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
        >
          Login with Google
        </Button>
      </Stack>
      <Link
        component={RouterLink}
        to="/auth/register"
        color="secondary.main"
        sx={{ textAlign: 'center', mt: 3, display: 'block' }}
      >
        Don&#39;t have an account? Sign up
      </Link>
    </AuthLayout>
  )
}

export default LoginPage
