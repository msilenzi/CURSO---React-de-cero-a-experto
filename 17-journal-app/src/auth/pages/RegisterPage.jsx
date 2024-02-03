import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '@Auth/layout'
import { Google } from '@mui/icons-material'
import { Button, Link, Stack, TextField, Typography } from '@mui/material'

function RegisterPage() {
  return (
    <AuthLayout title="Sign up">
      <Stack spacing={2}>
        <form>
          <Stack spacing={2}>
            <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Stack>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
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
