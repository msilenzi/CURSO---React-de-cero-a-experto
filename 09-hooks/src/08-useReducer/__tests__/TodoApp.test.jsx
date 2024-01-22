import { render } from '@testing-library/react'
import TodoApp from '08-useReducer/TodoApp'
import { useTodo } from '@Hooks/useTodo'

jest.mock('@Hooks/useTodo.js')

describe('Pruebas en <TodoApp />', () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: 'Todo #1', done: false },
      { id: 2, description: 'Todo #2', done: true },
    ],
    handleAdd: jest.fn(),
    handleDelete: jest.fn(),
    handleToggle: jest.fn(),
  })

  test('debe coincidir con el snapshot', () => {
    const {container} = render(<TodoApp />)
    expect(container).toMatchSnapshot()
  })
})
