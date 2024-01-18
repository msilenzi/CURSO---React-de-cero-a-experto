function todoReducer(initialState, action) {
  switch (action.type) {
    case 'add':
      return [...initialState, action.payload]
    case 'delete':
      return initialState.filter(({ id }) => id !== action.payload)
    case 'toggle':
      return initialState.map((todo) => {
        if (todo.id !== action.payload) return todo
        return { ...todo, done: !todo.done }
      })
    default:
      return initialState
  }
}

export default todoReducer
