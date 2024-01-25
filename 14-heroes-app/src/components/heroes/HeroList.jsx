import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import { HeroCard } from './HeroCard'

function HeroList({ heroes }) {
  return (
    <Row xs={1} sm={2} lg={3} className="g-3 pb-5">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </Row>
  )
}

HeroList.propTypes = {
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      superhero: PropTypes.string.isRequired,
      publisher: PropTypes.string.isRequired,
      alter_ego: PropTypes.string.isRequired,
      first_appearance: PropTypes.string.isRequired,
      characters: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export { HeroList }
