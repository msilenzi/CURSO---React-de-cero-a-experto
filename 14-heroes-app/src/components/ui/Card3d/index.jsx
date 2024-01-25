import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import './Card3d.css'

function map(val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA)
}

const initialStyles = {
  transform: 'rotateX(0deg) rotateY(0deg)',
  filter: 'brightness(1)',
}

function Card3d({ src, alt }) {
  const [styles, setStyles] = useState(initialStyles)
  const animationFrameRef = useRef(null)

  function handleMouseMove(e) {
    const limit = 15
    cancelAnimationFrame(animationFrameRef.current)
    animationFrameRef.current = requestAnimationFrame(() => {
      let rotateY = map(e.nativeEvent.offsetX, 0, 180, -limit, limit)
      let rotateX = map(e.nativeEvent.offsetY, 0, 250, limit, -limit)
      let brightness = map(e.nativeEvent.offsetY, 0, 250, 1.25, 0.75)

      setStyles({
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        filter: `brightness(${brightness})`,
      })
    })
  }

  function handleMouseLeave() {
    animationFrameRef.current = requestAnimationFrame(() =>
      setStyles(initialStyles)
    )
  }

  return (
    <div
      className="card3d h-100"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Img
        alt={alt}
        src={src}
        style={{
          height: '100%',
          objectFit: 'cover',
          ...styles,
        }}
      />
    </div>
  )
}

Card3d.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export { Card3d }
