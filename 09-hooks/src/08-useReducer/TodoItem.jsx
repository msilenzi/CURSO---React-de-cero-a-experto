import PropTypes from 'prop-types'
import { todoType } from './todoTypes'

function TodoItem({
  todo: { id, description, done },
  handleDelete,
  handleToggle,
}) {
  function onDelete(e) {
    e.stopPropagation()
    handleDelete(id)
  }

  return (
    <li
      className={`todo-item list-group-item list-group-item-action d-flex justify-content-between align-items-center p-2 ${
        done ? 'bg-secondary-subtle' : ''
      }`}
      style={{ cursor: 'pointer' }}
      onClick={() => handleToggle(id)}
    >
      <span
        className={`${done ? 'text-muted text-decoration-line-through' : ''}`}
      >
        {description}
      </span>
      <button
        className="todo-item-delete btn btn-sm btn-outline-danger"
        onClick={onDelete}
      >
        &#10005;
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: todoType.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
}

export default TodoItem
