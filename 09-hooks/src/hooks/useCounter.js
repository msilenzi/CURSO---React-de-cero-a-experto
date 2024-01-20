import { useState } from 'react'

function useCounter(initialValue, options = {}) {
  const { min = -Infinity, max = Infinity } = options
  const initialCounter = Math.max(min, Math.min(initialValue, max))

  const [counter, setCounter] = useState(initialCounter)

  const increment = () => {
    setCounter((prevCounter) =>
      prevCounter === options.max ? prevCounter : prevCounter + 1
    )
  }

  const decrement = () => {
    setCounter((prevCounter) =>
      prevCounter === options.min ? prevCounter : prevCounter - 1
    )
  }

  const reset = () => {
    setCounter(initialValue)
  }

  return { counter, increment, decrement, reset }
}

export { useCounter }
