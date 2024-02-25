import { useRef, useState } from 'react'

import { useSelector } from 'react-redux'

import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import AttachFileIcon from '@mui/icons-material/AttachFile'
import ImageGallery from './ImageGallery'

function ImageInput() {
  const { isSaving } = useSelector((state) => state.journal)
  const fileInputRef = useRef(null)

  const [images, setImages] = useState([])

  function handleFileInputChange(e) {
    if (e.target.files === 0) return
    setImages(
      Array.from(e.target.files).filter((image) =>
        image.type.includes('image/')
      )
    )
  }

  return (
    <Paper variant="outlined" sx={{ p: 1 }}>
      <Stack spacing={1}>
        {images.length === 0 ? (
          <Typography align="center">No new images selected</Typography>
        ) : (
          <ImageGallery
            height="150px"
            images={images.map((image) => ({
              src: URL.createObjectURL(image),
              title: image.name,
            }))}
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
