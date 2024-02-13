import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../slices'

function Pokemon() {
  const { page, pokemons, isLoading } = useSelector((state) => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons(1))
  }, [dispatch])

  return (
    <main style={{ minHeight: '90svh', marginTop: 'calc(5svh - 4rem)' }}>
      <h1>Pokemon</h1>
      <Loading isLoading={isLoading} />
      <PokemonsList
        page={page}
        pokemons={pokemons}
        isLoading={isLoading}
        dispatch={dispatch}
      />
    </main>
  )
}

function Loading({ isLoading }) {
  if (!isLoading) return null
  return <h3>Loading pokemons...</h3>
}

function PokemonsList({ page, pokemons, isLoading, dispatch }) {
  if (isLoading) return null

  return (
    <>
      <ul>
        {pokemons.map(({ name }) => (
          <li
            key={name}
            style={{ textAlign: 'left', textTransform: 'capitalize' }}
          >
            {name}
          </li>
        ))}
      </ul>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <button
          onClick={() => dispatch(getPokemons(page - 1))}
          disabled={page === 1}
        >
          &#8810; Prev
        </button>
        <span style={{ margin: '0 2em' }}>{page}</span>
        <button onClick={() => dispatch(getPokemons(page + 1))}>
          Next &#8811;
        </button>
      </div>
    </>
  )
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

PokemonsList.propTypes = {
  page: PropTypes.number.isRequired,
  pokemons: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default Pokemon
