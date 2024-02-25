import PropTypes from 'prop-types'

import { styled } from '@mui/material/styles'
import MuiIconButton from '@mui/material/IconButton'
import MuiImageListItem from '@mui/material/ImageListItem'
import MuiImageListItemBar from '@mui/material/ImageListItemBar'
import MuiInputBase from '@mui/material/InputBase'

import DeleteIcon from '@mui/icons-material/Delete'

function ImageGalleryItem({
  src,
  title,
  onTitleChange,
  onDelete,
  onImageClick,
}) {
  return (
    <ImageListItem>
      <img
        src={src}
        alt={title}
        loading="lazy"
        onClick={onImageClick}
        style={{ cursor: 'pointer' }}
      />
      <ImageListItemBar
        title={<Input type="text" value={title} onChange={onTitleChange} />}
        actionIcon={
          <DeleteButton onClick={onDelete}>
            <DeleteIcon />
          </DeleteButton>
        }
      />
    </ImageListItem>
  )
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
}

export default ImageGalleryItem

//
// Custom styles

const DeleteButton = styled(MuiIconButton)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.5)',
  transition: theme.transitions.create('color', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    color: theme.palette.error.main,
  },
}))

const ImageListItem = styled(MuiImageListItem)(({ theme }) => ({
  overflow: 'hidden',
  '& .MuiImageListItemBar-root:not(:has(input:focus-within))': {
    marginBottom: '-3.5em',
    transition: theme.transitions.create('margin-bottom', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  '&:hover .MuiImageListItemBar-root:not(:has(input:focus-within))': {
    marginBottom: '0',
  },
}))

const ImageListItemBar = styled(MuiImageListItemBar)(() => ({
  backdropFilter: 'blur(3px)',
}))

const Input = styled(MuiInputBase)(({ theme }) => ({
  color: 'white',
  paddingLeft: theme.spacing(1),
  borderRadius: theme.shape.borderRadius * 0.5,
  '&:focus-within': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
}))
