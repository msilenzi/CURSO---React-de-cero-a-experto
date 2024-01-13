import { useEffect, useState } from 'react'

function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: [],
  })

  useEffect(() => {
    (async () => {
      setState((prevState) => ({ ...prevState, isLoading: true }))

      const resp = await fetch(url)
      const data = await resp.json()

      setState((prevState) => ({ ...prevState, data, isLoading: false }))
    })()
  }, [url])

  return state
}

export { useFetch }
