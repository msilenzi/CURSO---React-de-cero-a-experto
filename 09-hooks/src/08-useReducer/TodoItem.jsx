import { todoType } from './todoTypes'

function TodoItem({ todo: { id, description, done } }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center p-2">
      {description}
      <button className="btn btn-outline-danger">Delete</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: todoType.isRequired,
}

export default TodoItem
