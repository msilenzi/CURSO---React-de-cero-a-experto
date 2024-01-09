import PropTypes from 'prop-types'
import { BarLoader } from 'react-spinners'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import CategoryItem from '../CategoryItem/CategoryItem'

import './CategoryList.css'

function CategoryList({ category, fetcher }) {
  const { images, isLoading } = useFetchGifs(fetcher)

  return (
    <section className="gif-list">
      <div className="container">
        <h3 className="gif-list__title">{category}</h3>
        {isLoading ? <Loading /> : <List category={category} images={images} />}
      </div>
    </section>
  )
}

function List({ images }) {
  return (
    <ul className="masonry-container">
      {images.map((image) => (
        <CategoryItem key={image.id} {...image} />
      ))}
    </ul>
  )
}

function Loading() {
  return (
    <div className="gif-list__loading">
      <BarLoader
        color="#8319e6" // --primary-500
        height="0.25rem"
        width="25%"
        speedMultiplier={0.75}
        cssOverride={{ borderRadius: '1rem' }}
      />
    </div>
  )
}

CategoryList.propTypes = {
  category: PropTypes.string.isRequired,
  fetcher: PropTypes.func.isRequired,
}

List.propTypes = {
  images: PropTypes.array.isRequired,
}

export default CategoryList
