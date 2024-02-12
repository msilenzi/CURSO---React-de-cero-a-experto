import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from 'features/counter/slices'
import { pokemonSlice } from 'features/pokemon/slices'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
})
