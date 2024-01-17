import { useCounter } from '@Hooks'
import Bold from './Bold'
import { useState } from 'react'

function Memorize() {
  const { counter, increment } = useCounter(0)
  const [show, setShow] = useState(true)

  return (
    <div style={{ width: '320px' }}>
      <h3 className="mb-4">
        Memorize
      </h3>

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
        <button className="btn btn-outline-dark btn-sm" onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'} content
        </button>
        <span className={`text-muted ${!show ? 'd-none' : ''}`}>
          Showing content
        </span>
      </div>
    </div>
  )
}

export default Memorize
