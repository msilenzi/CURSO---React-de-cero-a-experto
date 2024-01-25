import PropTypes from 'prop-types'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { Card3d } from '@Components/ui'
import { getHeroById } from '@Utils'

function HeroById() {
  const { id } = useParams()
  const hero = getHeroById(id)

  const navigate = useNavigate()

  if (!hero) return <Navigate to="/marvel" />

  return (
    <Row className="mt-2 g-5">
      <Col md={4}>
        <Card3d src={`/assets/heroes/${hero.id}.jpg`} alt={hero.superhero} />
      </Col>
      <Col md={8}>
        <div className="d-flex align-items-center gap-2 mb-2">
          <h1>{hero.superhero}</h1>
          <h4>
            <PublisherBadge publisher={hero.publisher} />
          </h4>
          <Button
            variant="outline-secondary"
            className="ms-auto"
            onClick={() => navigate(-1)}
          >
            ←
          </Button>
        </div>
        <h3 className="text-muted mb-4">{hero.alter_ego}</h3>
        <p className="mb-4">
          <b>First Apperance:</b> {hero.first_appearance}
        </p>
        <h5>Characters:</h5>
        <ul>
          {hero.characters.split(', ').map((ch) => (
            <li key={ch}>{ch}</li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

function PublisherBadge({ publisher }) {
  const mapColor = {
    'Marvel Comics': 'danger',
    'DC Comics': 'primary',
  }

  return (
    <Badge pill bg={mapColor?.[publisher] ?? 'secondary'}>
      {publisher}
    </Badge>
  )
}

PublisherBadge.propTypes = {
  publisher: PropTypes.string.isRequired,
}

export { HeroById }
