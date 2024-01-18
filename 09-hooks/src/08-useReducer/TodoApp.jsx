import { useEffect, useReducer } from 'react'
import SectionTitle from '@UI/SectionTitle'
import todoReducer from './todoReducer'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import TodoResume from './TodoResume'

const initialState = []

function init() {
  return JSON.parse(localStorage.getItem('todos')) ?? []
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function handleAdd(todo) {
    dispatch({ type: 'add', payload: todo })
  }

  function handleDelete(id) {
    dispatch({ type: 'delete', payload: id })
  }

  function handleToggle(id) {
    dispatch({ type: 'toggle', payload: id })
  }

  return (
    <div style={{ minWidth: '420px' }}>
      <SectionTitle text="TodoApp" />
      <TodoResume todos={todos} />
      <TodoAdd handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  )
}

export default TodoApp
