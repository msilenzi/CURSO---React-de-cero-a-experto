import PropTypes from 'prop-types'
import { useGetTodoByIdQuery, useGetTodosQuery } from '../store/api'
import { useState } from 'react'

function TodoApp() {
  // const { data, isLoading } = useGetTodosQuery()

  const [todoId, setTodoId] = useState(1)
  const { data, isLoading } = useGetTodoByIdQuery(todoId)

  return (
    <main
      style={{
        minHeight: '90svh',
        marginTop: 'calc(5svh - 4rem)',
        textAlign: 'left',
      }}
    >
      <h1>Todo - RTK Query</h1>
      <Loading isLoading={isLoading} />
      {/* <TodosList isLoading={isLoading} todos={data} /> */}
      <Todo
        isLoading={isLoading}
        todo={data}
        onPrev={() => setTodoId((id) => id - 1)}
        onNext={() => setTodoId((id) => id + 1)}
      />
    </main>
  )
}

function Loading({ isLoading }) {
  if (!isLoading) return null
  return <h3>Loading...</h3>
}

function TodosList({ isLoading, todos }) {
  if (isLoading) return null

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              color: todo.completed ? 'rgba(255, 255, 255, 0.5)' : 'inherit',
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  )
}

function Todo({ isLoading, todo, onPrev, onNext }) {
  if (isLoading) return null

  return (
    <>
      <pre>{JSON.stringify(todo, null, 2)}</pre>

      <div>
        <button onClick={onPrev} disabled={todo.id === 1}>
          &#8810; Prev
        </button>
        <span style={{ margin: '0 2em' }}>{todo.id}</span>
        <button onClick={onNext}>Next &#8811;</button>
      </div>
    </>
  )
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

TodosList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  todos: PropTypes.array,
}

Todo.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  todo: PropTypes.object,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default TodoApp
