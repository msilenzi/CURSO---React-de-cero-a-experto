import { useEffect, useReducer } from 'react'
import todoReducer from '08-useReducer/todoReducer'

const initialState = []

function init() {
  return JSON.parse(localStorage.getItem('todos')) ?? []
}

function useTodo() {
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

  return { todos, handleAdd, handleDelete, handleToggle }
}

export { useTodo }
