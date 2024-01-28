import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Card3d.css'

function map(val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA)
}

const initialStyles = {
  transform: 'rotateX(0deg) rotateY(0deg)',
  filter: 'brightness(1)',
}

function Card3d({ children }) {
  const [styles, setStyles] = useState(initialStyles)
  const animationFrameRef = useRef(null)

  function handleMouseMove(e) {
    cancelAnimationFrame(animationFrameRef.current)

    const limit = 15
    const boundingBox = e.currentTarget.getBoundingClientRect()

    animationFrameRef.current = requestAnimationFrame(() => {
      let offsetX = e.nativeEvent.clientX - boundingBox.left
      let offsetY = e.nativeEvent.clientY - boundingBox.top

      let rotateY = map(offsetX, 0, boundingBox.width, -limit, limit)
      let rotateX = map(offsetY, 0, boundingBox.height, limit, -limit)
      let brightness = map(offsetY, 0, boundingBox.height, 1.25, 0.75)

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
      className="card3d"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {React.cloneElement(children, {
        className: `card3d-children ${children.props.className || ''}`,
        style: { ...styles },
      })}
    </div>
  )
}

Card3d.propTypes = {
  children: PropTypes.element.isRequired,
}

export { Card3d }
