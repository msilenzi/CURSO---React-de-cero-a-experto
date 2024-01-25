import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import Alert from 'react-bootstrap/Alert'

import { PageTitle } from '@Components/ui'
import { SearchBar } from './SearchBar'
import { getHeroesByName } from '@Utils'
import { HeroList } from '@Components/heroes'

function Search() {
  const location = useLocation()
  const q = new URLSearchParams(location.search).get('q') ?? ''
  const heroes = q !== '' ? getHeroesByName(q) : []

  return (
    <>
      <PageTitle title="Search" />
      <SearchBar />
      <AlertSearch search={q} />
      <AlertNotFound search={q} coincidences={heroes.length} />
      {heroes.length !== 0 && <HeroList heroes={heroes} />}
    </>
  )
}

function AlertSearch({ search }) {
  if (search !== '') return null
  return (
    <Alert variant="primary" className="animate__animated animate__fadeInUp">
      Search a hero
    </Alert>
  )
}

function AlertNotFound({ search, coincidences }) {
  if (search === '' || coincidences !== 0) return null
  return (
    <Alert variant="danger" className="animate__animated animate__fadeInUp">
      No results found for <i>{search}</i>
    </Alert>
  )
}

AlertSearch.propTypes = {
  search: PropTypes.string.isRequired,
}

AlertNotFound.propTypes = {
  search: PropTypes.string.isRequired,
  coincidences: PropTypes.number.isRequired,
}

export { Search }
