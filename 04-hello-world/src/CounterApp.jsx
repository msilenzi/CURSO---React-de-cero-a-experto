import PropTypes from 'prop-types'
import { useState } from 'react'

function CounterApp({ initialValue }) {
  const [counter, setCounter] = useState(initialValue)

  function increaseCounter() {
    setCounter(counter + 1)
  }

  function decreaseCounter() {
    setCounter(counter - 1)
  }

  function resetCounter() {
    setCounter(initialValue)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2 className="counter">{counter}</h2>
      <div className="counter__buttons">
        <button onClick={decreaseCounter}>-</button>
        <button onClick={resetCounter}>reset</button>
        <button onClick={increaseCounter}>+</button>
      </div>
    </>
  )
}

CounterApp.propTypes = {
  initialValue: PropTypes.number.isRequired,
}

export default CounterApp
