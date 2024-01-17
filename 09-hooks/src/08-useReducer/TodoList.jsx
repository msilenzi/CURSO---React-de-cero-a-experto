import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { todoType } from './todoTypes'

function TodoList({ todos }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoType.isRequired)
}

export default TodoList
