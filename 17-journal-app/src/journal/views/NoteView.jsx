import { Save } from '@mui/icons-material'
import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { ImageGallery } from '@Journal/components'
import { timestampToString } from '@Journal/utils'
import { useForm } from '@Hooks'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

function NoteView() {
  const { activeNote } = useSelector((state) => state.journal)

  const { formState } = useForm(activeNote)

  const dateString = useMemo(
    () => timestampToString(formState.date),
    [formState.date]
  )

  return (
    <Stack spacing={3} sx={{ width: '100%', maxWidth: '720px', m: '0 auto' }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6" fontWeight={300}>
          {dateString}
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
        value={formState.title}
      />
      <TextField
        autoComplete="off"
        required
        fullWidth
        id="body"
        name="body"
        label="Body"
        multiline
        minRows={5}
        value={formState.body}
      />
      <ImageGallery />
    </Stack>
  )
}

export default NoteView
