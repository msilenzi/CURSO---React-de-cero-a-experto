import { useState } from 'react'
import PropTypes from 'prop-types'

import './PlaceholderedImage.css'

function PlaceholderedImage({
  placeholderColor,
  src,
  alt,
  height,
  width,
  ...imgProps
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  function handleOnLoad(e) {
    e.target.style.visibility = 'visible'
    setIsLoaded(true)
  }

  return (
    <div
      className="placeholdered-image"
      style={{ backgroundColor: isLoaded ? 'transparent' : placeholderColor }}
    >
      <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        {...imgProps}
        style={{ visibility: 'hidden' }}
        onLoad={handleOnLoad}
      />
    </div>
  )
}

PlaceholderedImage.propTypes = {
  placeholderColor: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
}

export default PlaceholderedImage
