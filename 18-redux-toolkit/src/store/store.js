import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from 'features/counter/slices'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})
