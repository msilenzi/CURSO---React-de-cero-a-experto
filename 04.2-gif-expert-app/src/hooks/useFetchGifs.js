import { useState, useEffect } from 'react'
import { fetchGifs } from '../helpers/gifs'

function useFetchGifs(category) {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchGifs(category).then(setImages)
  }, [category])

  return { images }
}

export { useFetchGifs }
