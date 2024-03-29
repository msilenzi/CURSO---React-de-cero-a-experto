import PropTypes from 'prop-types'
import { todoType } from './todoTypes'
import TodoItem from './TodoItem'

function TodoList({ todos, handleDelete, handleToggle }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoType.isRequired),
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
}

export default TodoList
