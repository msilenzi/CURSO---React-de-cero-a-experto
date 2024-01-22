import PropTypes from 'prop-types'

const todoType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
})

export { todoType }
