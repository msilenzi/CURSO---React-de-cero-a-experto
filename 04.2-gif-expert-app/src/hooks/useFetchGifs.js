import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/gifs'

function useFetchGifs(category) {
  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs(category).then(setImages)
  }, [category])

  return { images }
}

export { useFetchGifs }
