function todoReducer(initialState, action) {
  switch (action.type) {
    case 'add':
      return [...initialState, action.payload]
    case 'delete':
      return initialState.filter(({ id }) => id !== action.payload)
    default:
      return initialState
  }
}

export default todoReducer
