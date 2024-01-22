import { fireEvent, render, screen } from '@testing-library/react'
import TodoItem from '08-useReducer/TodoItem'

describe('Pruebas en <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'Piedra del alma',
    done: false,
  }

  const handleDeleteMock = jest.fn()
  const handleToggleMock = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('debe mostrar el todo pendiente correctamente', () => {
    render(
      <TodoItem
        todo={todo}
        handleDelete={handleDeleteMock}
        handleToggle={handleToggleMock}
      />
    )

    expect(screen.getByRole('listitem')).not.toHaveClass('bg-secondary-subtle')
    expect(screen.getByText(todo.description)).not.toHaveClass('text-muted')
  })

  test('debe mostrar el todo finalizado correctamente', () => {
    render(
      <TodoItem
        todo={{ ...todo, done: true }}
        handleDelete={handleDeleteMock}
        handleToggle={handleToggleMock}
      />
    )

    expect(screen.getByRole('listitem')).toHaveClass('bg-secondary-subtle')
    expect(screen.getByText(todo.description)).toHaveClass('text-muted')
  })

  test('debe hacer toggle correctamente', () => {
    render(
      <TodoItem
        todo={todo}
        handleDelete={handleDeleteMock}
        handleToggle={handleToggleMock}
      />
    )
    fireEvent.click(screen.getByRole('listitem'))

    expect(handleToggleMock).toHaveBeenCalledExactlyOnceWith(todo.id)
  })

  test('debe eliminar el todo correctamente', () => {
    render(
      <TodoItem
        todo={todo}
        handleDelete={handleDeleteMock}
        handleToggle={handleToggleMock}
      />
    )
    fireEvent.click(screen.getByRole('button'))

    expect(handleDeleteMock).toHaveBeenCalledExactlyOnceWith(todo.id)
  })
})
