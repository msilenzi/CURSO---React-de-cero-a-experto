import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { HeroCard } from './HeroCard'

function HeroList({ heroes }) {
  return (
    <div className="animate__animated animate__fadeInUp">
      <Row xs={2} sm={3} md={4} lg={5} className="g-2 g-md-3 pb-5">
        {heroes.map((hero) => (
          <Col key={hero.id}>
            <HeroCard hero={hero} />
          </Col>
        ))}
      </Row>
    </div>
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
