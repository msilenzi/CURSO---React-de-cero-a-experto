import PropTypes from 'prop-types'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import CategoryItem from '../CategoryItem/CategoryItem'

import './CategoryList.css'

function CategoryList({ category }) {
  const { images } = useFetchGifs(category)

  return (
    <section className="gif-list">
      <div className="container">
        <h3 className="gif-list__title">{category}</h3>
        <ul className="masonry-container">
          {images.map((image) => (
            <CategoryItem key={image.id} {...image} />
          ))}
        </ul>
      </div>
    </section>
  )
}

CategoryList.propTypes = {
  category: PropTypes.string.isRequired,
}

export default CategoryList
