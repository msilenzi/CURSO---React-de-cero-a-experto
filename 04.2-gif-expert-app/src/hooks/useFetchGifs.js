import { useState, useEffect } from 'react'

function useFetchGifs(fetcher) {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const newImages = await fetcher()
      console.log('loaded')
      setImages(newImages)
      setIsLoading(false)
    })()
  }, [fetcher])

  return { images, isLoading }
}

export { useFetchGifs }
