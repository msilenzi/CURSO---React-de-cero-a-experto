import PropTypes from 'prop-types'

function Counter({
  counter,
  increment,
  decrement,
  reset,
  isLoading,
  min = -Infinity,
  max = Infinity,
}) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p className="m-0 fs-4">
        Quotes: <b>{counter}</b>
      </p>
      <div className="d-flex gap-1">
        <button
          className="btn btn-dark"
          onClick={decrement}
          disabled={isLoading || counter === min}
        >
          &#8722;
        </button>
        <button className="btn btn-dark" onClick={reset} disabled={isLoading}>
          &#8634;
        </button>
        <button
          className="btn btn-dark"
          onClick={increment}
          disabled={isLoading || counter === max}
        >
          &#43;
        </button>
      </div>
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
}

export default Counter
