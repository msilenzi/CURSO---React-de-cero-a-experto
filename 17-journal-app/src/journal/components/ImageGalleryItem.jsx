import PropTypes from 'prop-types'
import { ImageListItem } from '@mui/material'

function ImageGalleryItem({ src, title }) {
  return (
    <ImageListItem>
    <img src={src} alt={title} loading="lazy" />
  </ImageListItem>
  )
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default ImageGalleryItem
