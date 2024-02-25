import PropTypes from 'prop-types'

import { styled } from '@mui/material/styles'
import MuiIconButton from '@mui/material/IconButton'
import MuiImageListItem from '@mui/material/ImageListItem'
import MuiImageListItemBar from '@mui/material/ImageListItemBar'

import DeleteIcon from '@mui/icons-material/Delete'

function ImageGalleryItem({ src, title }) {
  return (
    <ImageListItem>
      <img src={src} alt={title} loading="lazy" />
      <ImageListItemBar
        title={title}
        actionIcon={
          <DeleteButton>
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
}

export default ImageGalleryItem

//
// Custom styles:

const ImageListItem = styled(MuiImageListItem)(({ theme }) => ({
  overflow: 'hidden',
  '& .MuiImageListItemBar-root': {
    marginBottom: '-3em',
    transition: theme.transitions.create('margin-bottom', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  '&:hover': {
    '& .MuiImageListItemBar-root': {
      marginBottom: 0,
    },
  },
}))

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

const ImageListItemBar = styled(MuiImageListItemBar)(() => ({
  backdropFilter: 'blur(3px)',
}))
