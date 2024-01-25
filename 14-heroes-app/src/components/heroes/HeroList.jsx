import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import { getHeroesByPublisher } from '@Utils'
import { HeroCard } from './HeroCard'
import { useMemo } from 'react'

function HeroList({ publisher }) {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
  
  return (
    <Row xs={1} sm={2} lg={3} className='g-3 pb-5'>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </Row>
  )
}

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
}

export { HeroList }
