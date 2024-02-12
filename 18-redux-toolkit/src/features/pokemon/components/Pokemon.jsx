import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from '../slices'

function Pokemon() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons(0))
  }, [dispatch])

  return <h1>Pokemon</h1>
}
export default Pokemon
