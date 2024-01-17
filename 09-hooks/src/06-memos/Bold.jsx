import React from 'react'
import PropTypes from 'prop-types'

const Bold = React.memo(function Bold({ value }) {
  alert('Rendering <Bold />')
  return <strong>{value}</strong>
})

Bold.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default Bold
