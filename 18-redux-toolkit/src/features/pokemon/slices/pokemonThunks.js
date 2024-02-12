import { setPokemons, startLoadingPokemons } from './pokemonSlice'

export function getPokemons(page) {
  const LIMIT = 10

  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())


    
    dispatch(setPokemons())
  }
}
