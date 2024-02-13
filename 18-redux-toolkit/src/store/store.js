import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from 'features/counter/slices'
import { pokemonSlice } from 'features/pokemon/slices'
import { todosApi } from 'features/todo/store/api'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
})
