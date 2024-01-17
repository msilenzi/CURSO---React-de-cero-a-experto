import PropTypes from 'prop-types'
import { todoType } from './todoTypes'

function TodoItem({ todo: { id, description, done }, handleDelete }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center p-2">
      {description}
      <button
        className="btn btn-outline-danger"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: todoType.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default TodoItem
