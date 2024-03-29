import { useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import AttachFileIcon from '@mui/icons-material/AttachFile'
import ImageGallery from './ImageGallery'

import {
  addUnsavedImages,
  deleteUnsavedImage,
  renameUnsavedImage,
  selectActiveNoteUnsavedImages,
} from '@Store/journal'

function ImageInput() {
  const { isSaving } = useSelector((state) => state.journal)
  const images = useSelector(selectActiveNoteUnsavedImages)
  const dispatch = useDispatch()

  const fileInputRef = useRef(null)

  function handleDelete(image) {
    URL.revokeObjectURL(image.src)
    dispatch(deleteUnsavedImage(image))
  }

  function handleImageClick(image) {
    window.open(image.src, '_blank')
  }

  function handleTitleChange(image, value) {
    dispatch(renameUnsavedImage({ image, value }))
  }

  function handleFileInputChange(e) {
    if (e.target.files.length === 0) return

    const newImages = Array.from(e.target.files)
      .filter((imageFile) => imageFile.type.includes('image/'))
      .map((imageFile) => ({
        src: URL.createObjectURL(imageFile),
        title: imageFile.name,
      }))

    dispatch(addUnsavedImages(newImages))
  }

  return (
    <Paper variant="outlined" sx={{ p: 1 }}>
      <Stack spacing={1}>
        {images.length === 0 ? (
          <Typography align="center">No new images selected</Typography>
        ) : (
          <ImageGallery
            height="150px"
            images={images}
            handleDelete={handleDelete}
            handleImageClick={handleImageClick}
            handleTitleChange={handleTitleChange}
          />
        )}
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          startIcon={<AttachFileIcon />}
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          Attach images
        </Button>
        <input
          type="file"
          multiple
          accept="image/*"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileInputChange}
        />
      </Stack>
    </Paper>
  )
}

ImageInput.propTypes = {}

export default ImageInput
