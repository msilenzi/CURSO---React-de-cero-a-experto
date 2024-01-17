import PropTypes from 'prop-types'
import { todoType } from './todoTypes'

function TodoResume({ todos }) {
  const completedTodos = todos.filter(({ done }) => done)
  const percentage =
    todos.length > 0 ? (completedTodos.length * 100) / todos.length : 0

  return (
    <p className="mb-2 text-muted">
      Total: {todos.length} - Completed: {completedTodos.length}{' '}
      <i>({percentage.toFixed(2)}%)</i>
    </p>
  )
}

TodoResume.propTypes = {
  todos: PropTypes.arrayOf(todoType.isRequired).isRequired,
}

export default TodoResume
