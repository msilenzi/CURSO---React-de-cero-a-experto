import { useMemo, useState } from 'react'
import { useCounter } from '@Hooks'
import Bold from './Bold'

function heavyStuff(iterationNumber) {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Allé voy')
  }
  console.log('Allé fui')
  return `${iterationNumber} iteraciones realizadas`
}

function MemoHook() {
  const { counter, increment } = useCounter(0)
  const [show, setShow] = useState(true)

  const memorizedValue = useMemo(() => heavyStuff(5000 + counter), [counter])

  return (
    <div style={{ width: '320px' }}>
      <h3 className="mb-4">
        MemoHook
      </h3>

      <h4 className="mb-4">{memorizedValue}</h4>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <p className="m-0 fs-4">
          Quotes: <Bold value={counter} />
        </p>
        <div className="d-flex gap-1">
          <button className="btn btn-dark" onClick={increment}>
            &#43;
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() => setShow(!show)}
        >
          {show ? 'Hide' : 'Show'} content
        </button>
        <span className={`text-muted ${!show ? 'd-none' : ''}`}>
          Showing content
        </span>
      </div>
    </div>
  )
}

export default MemoHook
