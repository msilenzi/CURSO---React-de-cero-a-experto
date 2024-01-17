import PropTypes from 'prop-types'

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
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
}

export default TodoResume
