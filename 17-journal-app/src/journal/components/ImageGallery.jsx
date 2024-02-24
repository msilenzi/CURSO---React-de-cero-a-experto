import PropTypes from 'prop-types'
import { ImageList, ImageListItem } from '@mui/material'

function ImageGallery({ images = itemData, height }) {
  return (
    <ImageList
      sx={{
        gridAutoFlow: 'column',
        gridTemplateColumns: `repeat(auto-fill,minmax(${height},1fr)) !important`,
        gridAutoColumns: `minmax(${height}, 1fr)`,
        borderRadius: 1,
      }}
    >
      {images.map(({ src, alt }) => (
        <ImageListItem key={src}>
          <img src={src} alt={alt} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  height: PropTypes.string.isRequired,
}

export default ImageGallery

const itemData = [
  {
    src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format',
    alta: 'Breakfast',
  },
  {
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format',
    alt: 'Burger',
  },
  {
    src: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format',
    alt: 'Camera',
  },
  {
    src: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format',
    alt: 'Coffee',
  },
  {
    src: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format',
    alt: 'Hats',
  },
  {
    src: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format',
    alt: 'Honey',
  },
  {
    src: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format',
    alt: 'Basketball',
  },
  {
    src: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format',
    alt: 'Fern',
  },
  {
    src: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format',
    alt: 'Mushrooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format',
    alt: 'Tomato basil',
  },
  {
    src: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format',
    alt: 'Sea star',
  },
  {
    src: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format',
    alt: 'Bike',
  },
]
