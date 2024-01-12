import { useCounter } from '@Hooks'

function CounterWithHook() {
  const { counter, increment, decrement, reset } = useCounter(0)

  return (
    <div style={{ width: '320px' }}>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="m-0">
          Counter: <b>{counter}</b>
        </h3>
        <div className="d-flex gap-1">
          <button className="btn btn-dark" onClick={decrement}>
            &#8722;
          </button>
          <button className="btn btn-dark" onClick={reset}>
            &#8634;
          </button>
          <button className="btn btn-dark" onClick={increment}>
            &#43;
          </button>
        </div>
      </div>
    </div>
  )
}

export default CounterWithHook
