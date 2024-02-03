import PropTypes from 'prop-types'
import { Grid, Paper, Typography } from '@mui/material'

function AuthLayout({ title, children }) {
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
          {title}
        </Typography>
        {children}
      </Paper>
    </Grid>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
}

export default AuthLayout
