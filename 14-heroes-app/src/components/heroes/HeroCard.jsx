import { Card3d } from '@Components/ui'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

function HeroCard({ hero }) {
  return (
    <Col>
      <Card border="light" className="shadow">
        <Link to={`/hero/${hero.id}`}>
          <Row className="g-0">
            <Col md={4}>
              <Card3d
                alt={hero.superhero}
                src={`/assets/heroes/${hero.id}.jpg`}
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title className="clamped-text" title={hero.superhero}>
                  {hero.superhero}
                </Card.Title>
                <Card.Text className="clamped-text" title={hero.alter_ego}>
                  {hero.alter_ego}
                </Card.Text>
                <Card.Text
                  className="text-muted clamped-text"
                  title={hero.characters}
                >
                  {hero.characters}
                </Card.Text>
                <Card.Text
                  className="clamped-text"
                  title={hero.first_appearance}
                >
                  <small>{hero.first_appearance}</small>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Link>
      </Card>
    </Col>
  )
}

HeroCard.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    first_appearance: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired,
  }).isRequired,
}

export { HeroCard }
