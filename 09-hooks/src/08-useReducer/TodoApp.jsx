import SectionTitle from '@UI/SectionTitle'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import TodoResume from './TodoResume'
import { useTodo } from '@Hooks'

function TodoApp() {
  const { todos, handleAdd, handleDelete, handleToggle } = useTodo()

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
