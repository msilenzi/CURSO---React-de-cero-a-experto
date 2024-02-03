import { Link as RouterLink } from 'react-router-dom'
import { Button, Link, Stack, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '@Auth/layout'

function LoginPage() {
  return (
    <AuthLayout title="Login">
      <Stack spacing={2}>
        <form>
          <Stack spacing={2}>
            <TextField
              label="Email"
              type="email"
              placeholder="example@email.com"
              fullWidth
              required
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              required
            />
            <Button variant="contained" size="large" type="submit">
              Login
            </Button>
          </Stack>
        </form>
        <Typography sx={{ textAlign: 'center' }}>or</Typography>
        <Button variant="outlined" size="large" startIcon={<Google />}>
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
