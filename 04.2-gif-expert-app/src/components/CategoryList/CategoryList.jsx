import { useFetchGifs } from '../../hooks/useFetchGifs'
import CategoryItem from '../CategoryItem/CategoryItem'

import './CategoryList.css'

const CategoryList = ({ category }) => {
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

export default CategoryList
