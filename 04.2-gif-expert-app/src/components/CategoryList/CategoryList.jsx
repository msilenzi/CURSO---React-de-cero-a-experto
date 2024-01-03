import { useEffect, useState } from 'react'
import { getGifs } from '../../helpers/gifs'

import './CategoryList.css'

const CategoryList = ({ category }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs(category).then(setImages)
  }, [category])

  return (
    <section className='gif-list'>
      <div className="container">
        <h3 className='gif-list__title'>{category}</h3>
        <ul>
          {images.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CategoryList
