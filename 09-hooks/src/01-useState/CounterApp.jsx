import PropTypes from 'prop-types'
import { useState } from 'react'

function CounterApp() {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  })

  return (
    <div style={{ width: '320px' }}>
      <Counter
        name="Counter 1"
        value={counter1}
        update={() =>
          setCounter((prev) => ({ ...prev, counter1: counter1 + 1 }))
        }
      />
      <hr className="my-4" />
      <Counter
        name="Counter 2"
        value={counter2}
        update={() =>
          setCounter((prev) => ({ ...prev, counter2: counter2 + 1 }))
        }
      />
      <hr className="my-4" />{' '}
      <Counter
        name="Counter 3"
        value={counter3}
        update={() =>
          setCounter((prev) => ({ ...prev, counter3: counter3 + 1 }))
        }
      />
    </div>
  )
}

function Counter({ name, value, update }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h3 className="m-0">
        {name}: <b>{value}</b>
      </h3>
      <button className="btn btn-dark" onClick={update}>
        +1
      </button>
    </div>
  )
}

Counter.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
}

export default CounterApp
