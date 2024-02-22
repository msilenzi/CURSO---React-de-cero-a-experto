import { CircularProgress, Grid } from '@mui/material'

function CheckingAuth() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="primary.main"
      sx={{
        minHeight: '100vh',
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress color='secondary' size={50} />
    </Grid>
  )
}

export default CheckingAuth
