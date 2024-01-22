import todoReducer from '08-useReducer/todoReducer'

describe('Pruebas en todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Mock Todo',
      done: false,
    },
  ]

  test('debe retornar el estado inicial', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('debe agregar un todo', () => {
    const action = {
      type: 'add',
      payload: {
        id: 2,
        description: 'New todo',
        done: false,
      },
    }
    const newState = todoReducer(initialState, action)
    expect(newState).toHaveLength(2)
  })

  test('debe eliminar un todo', () => {
    const action = {
      type: 'delete',
      payload: 1,
    }
    const newState = todoReducer(initialState, action)
    expect(newState).toHaveLength(0)
  })

  test('debe hacer toggle sobre un todo', () => {
    const action = {
      type: 'toggle',
      payload: 1,
    }
    const newState = todoReducer(initialState, action)
    expect(newState[0].done).toBeTrue()

    const newState2 = todoReducer(newState, action)
    expect(newState2[0].done).toBeFalse()
  })
})
