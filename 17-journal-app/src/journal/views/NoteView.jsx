import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Save } from '@mui/icons-material'
import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { ImageGallery, ImageInput, SnackbarSave } from '@Journal/components'
import { timestampToString } from '@Journal/utils'
import { useForm } from '@Hooks'
import {
  deleteSavedImage,
  renameSavedImage,
  selectActiveNote,
  startSavingNote,
  updateActiveNote,
} from '@Store/journal'

function NoteView() {
  const { isSaving } = useSelector((state) => state.journal)
  const currentNote = useSelector(selectActiveNote)

  const dispatch = useDispatch()

  const { formState, handleInputChange } = useForm(currentNote)

  useEffect(() => {
    dispatch(updateActiveNote(formState))
  }, [dispatch, formState])

  const dateString = useMemo(
    () => timestampToString(formState.date),
    [formState.date]
  )

  function handleSave() {
    dispatch(startSavingNote())
  }

  function handleDelete(image) {
    dispatch(deleteSavedImage(image))
  }

  function handleImageClick(image) {
    window.open(image.src, '_blank')
  }

  function handleTitleChange(image, value) {
    dispatch(renameSavedImage({image, value}))
  }

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
        <Button
          variant="text"
          startIcon={<Save />}
          onClick={handleSave}
          disabled={isSaving}
        >
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
        onChange={handleInputChange}
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
        onChange={handleInputChange}
      />
      <ImageGallery
        height="200px"
        images={currentNote.images}
        handleDelete={handleDelete}
        handleImageClick={handleImageClick}
        handleTitleChange={handleTitleChange}
      />
      <ImageInput />

      <SnackbarSave />
    </Stack>
  )
}

export default NoteView
