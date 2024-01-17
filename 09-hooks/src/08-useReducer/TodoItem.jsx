import PropTypes from 'prop-types'

function TodoItem({ id, description, done }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center p-2">
      {description}
      <button className="btn btn-outline-danger">Delete</button>
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
}

export default TodoItem
