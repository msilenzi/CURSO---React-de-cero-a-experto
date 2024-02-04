import { Save } from '@mui/icons-material'
import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { ImageGallery } from '@Journal/components'

function NoteView() {
  return (
    <Stack spacing={3} sx={{width: '100%', maxWidth: 'md', m: '0 auto'}}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6" fontWeight={300}>
          {new Date().toLocaleString('en-US', { dateStyle: 'full' })}
        </Typography>
        <Button variant="text" startIcon={<Save />}>
          Save
        </Button>
      </Grid>
      <TextField
        autoComplete="off"
        required
        fullWidth
        id="title"
        name="title"
        label="Title"
      />
      <TextField
        autoComplete="off"
        required
        fullWidth
        id="content"
        name="content"
        label="Content"
        multiline
        minRows={5}
      />
      <ImageGallery />
    </Stack>
  )
}

export default NoteView
