import { StarOutlineRounded } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'

function NothingSelectedView() {
  return (
    <Stack
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{
        flex: 1,
        bgcolor: 'primary.main',
        borderRadius: 4,
        boxShadow: 6,
      }}
    >
      <StarOutlineRounded sx={{ fontSize: 100, color: 'primary.light' }} />
      <Typography variant="h5" color="white">
        Select or create a new entry
      </Typography>
    </Stack>
  )
}

export default NothingSelectedView
