import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function TodoList({ todos }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(TodoItem.propTypes))
}

export default TodoList
