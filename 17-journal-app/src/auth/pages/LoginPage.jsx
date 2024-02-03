import { Link as RouterLink } from 'react-router-dom'
import {
  Button,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Google } from '@mui/icons-material'

function LoginPage() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="primary.main"
      sx={{ minHeight: '100vh', padding: 4 }}
    >
      <Paper
        component="main"
        elevation={12}
        sx={{ p: 4, width: '100%', maxWidth: 'sm', borderRadius: 4 }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Login
        </Typography>
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
      </Paper>
    </Grid>
  )
}

export default LoginPage
