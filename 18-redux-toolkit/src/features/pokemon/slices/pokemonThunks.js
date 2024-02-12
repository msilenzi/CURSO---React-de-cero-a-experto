import { pokemonApi } from '../api'
import { setPokemons, startLoadingPokemons } from './pokemonSlice'

export function getPokemons(page) {
  const LIMIT = 10
  const OFFSET = page * 10

  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())
    const { data } = await pokemonApi.get(
      `/pokemon?limit=${LIMIT}&offset=${OFFSET}`
    )
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }))
  }
}
