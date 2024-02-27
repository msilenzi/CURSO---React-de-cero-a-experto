import PropTypes from 'prop-types'
import ImageList from '@mui/material/ImageList'
import ImageGalleryItem from './ImageGalleryItem'

function ImageGallery({
  images,
  height,
  handleTitleChange,
  handleDelete,
  handleImageClick,
}) {
  return (
    <ImageList
      sx={{
        gridAutoFlow: 'column',
        gridTemplateColumns: `repeat(auto-fill,minmax(${height},1fr)) !important`,
        gridAutoColumns: `minmax(${height}, 1fr)`,
        borderRadius: 1,
      }}
    >
      {images.map((image) => (
        <ImageGalleryItem
          key={image.src}
          {...image}
          onTitleChange={(e) => handleTitleChange(image, e.target.value)}
          onDelete={() => handleDelete(image)}
          onImageClick={() => handleImageClick(image)}
        />
      ))}
    </ImageList>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  height: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleImageClick: PropTypes.func.isRequired,
}

export default ImageGallery
