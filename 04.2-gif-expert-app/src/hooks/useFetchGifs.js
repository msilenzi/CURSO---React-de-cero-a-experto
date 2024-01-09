import { useState, useEffect } from 'react'
import { fetchGifs } from '../helpers/gifs'

function useFetchGifs(category) {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const newImages = await fetchGifs(category)
      console.log('loaded')
      setImages(newImages)
      setIsLoading(false)
    })()
  }, [category])

  return { images, isLoading }
}

export { useFetchGifs }
