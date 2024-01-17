import { useState } from 'react'

function useCounter(initialValue, options = { min: -Infinity, max: Infinity }) {
  const [counter, setCounter] = useState(initialValue)

  const increment = () => {
    if (counter === options.max) return
    setCounter(counter + 1)
  }

  const decrement = () => {
    if (counter === options.min) return
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(initialValue)
  }

  return { counter, increment, decrement, reset }
}

export { useCounter }
