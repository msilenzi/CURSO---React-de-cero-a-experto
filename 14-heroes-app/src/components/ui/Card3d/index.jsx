import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import './Card3d.css'

function map(val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA)
}

function Card3d({ children }) {
  const cardRef = useRef(null)

  function handleMouseMove(e) {
    const limit = 15
    const boundingBox = e.currentTarget.getBoundingClientRect()

    let offsetX = e.nativeEvent.clientX - boundingBox.left
    let offsetY = e.nativeEvent.clientY - boundingBox.top

    let rotateY = map(offsetX, 0, boundingBox.width, -limit, limit)
    let rotateX = map(offsetY, 0, boundingBox.height, limit, -limit)
    let brightness = map(offsetY, 0, boundingBox.height, 1.25, 0.75)

    cardRef.current.style =
      `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);` +
      `filter: brightness(${brightness});`
  }

  function handleMouseLeave() {
    cardRef.current.style =
      'transform: rotateX(0deg) rotateY(0deg); filter: brightness(1)'
  }

  return (
    <div
      className="card3d"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {React.cloneElement(children, {
        className: `card3d-children ${children.props.className || ''}`,
        ref: cardRef
      })}
    </div>
  )
}

Card3d.propTypes = {
  children: PropTypes.element.isRequired,
}

export { Card3d }
