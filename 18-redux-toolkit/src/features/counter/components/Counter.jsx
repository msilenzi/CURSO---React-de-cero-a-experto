import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../slices'
import reactLogo from '../assets/react.svg'
import reduxLogo from '../assets/redux.svg'
import './Counter.css'

function Counter() {
  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://redux-toolkit.js.org/" target="_blank">
          <img src={reduxLogo} className="logo" alt="Redux logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Redux Toolkit</h1>
      <h2>count is {counter}</h2>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>
      </div>
    </>
  )
}

export default Counter
