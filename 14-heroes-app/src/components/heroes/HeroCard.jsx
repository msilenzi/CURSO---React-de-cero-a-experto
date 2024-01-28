import { Card3d } from '@Components/ui'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import './HeroCard.css'

function HeroCard({ hero }) {
  return (
    <Card3d>
      <Card className="border-0 text-white">
        <Link to={`/hero/${hero.id}`} className="hero-card">
          <Card.Img
            alt={hero.superhero}
            src={`/assets/heroes/${hero.id}.jpg`}
          />
          <Card.ImgOverlay className="d-flex justify-content-end flex-column card-img-overlay--text-bottom">
            <Card.Title className="fw-bold m-0 fs-4">
              {hero.superhero}
            </Card.Title>
            <Card.Text>{hero.alter_ego}</Card.Text>
          </Card.ImgOverlay>
        </Link>
      </Card>
    </Card3d>
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
