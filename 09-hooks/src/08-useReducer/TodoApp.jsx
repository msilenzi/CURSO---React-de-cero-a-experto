import { useReducer } from 'react'
import SectionTitle from '@UI/SectionTitle'
import todoReducer from './todoReducer'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import TodoResume from './TodoResume'

const initialState = [
  {
    id: 1,
    description: 'Recolectar la piedra del alma',
    done: true,
  },
  {
    id: 2,
    description: 'Recolectar la piedra del tiempo',
    done: false,
  },
]

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  function handleAdd(todo) {
    dispatch({type: 'add', payload: todo})
  }

  return (
    <div style={{ minWidth: '420px' }}>
      <SectionTitle text="TodoApp" />
      <TodoResume todos={todos} />
      <TodoAdd handleAdd={handleAdd} />
      <TodoList todos={todos} />
    </div>
  )
}

export default TodoApp
