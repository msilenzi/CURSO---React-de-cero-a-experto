import { useLayoutEffect, useRef, useState } from 'react'
import Counter from '03-examples/Counter'
import Quotes from '03-examples/Quotes'
import { useCounter, useFetch } from '@Hooks'

function Layout() {
  const { counter, increment, decrement, reset } = useCounter(1, {
    min: 1,
    max: 4,
  })

  const quotesRef = useRef()
  const [quotesSize, setQuotesSize] = useState({ width: 0, height: 0 })

  const { data, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  )

  useLayoutEffect(() => {
    const { width, height } = quotesRef.current.getBoundingClientRect()
    setQuotesSize({ width, height })
  }, [data])

  return (
    <div style={{ width: '460px' }}>
      <h3 className="mb-4">Beraking Bad Quotes</h3>
      <div className="mb-4">
        <Counter
          counter={counter}
          increment={increment}
          decrement={decrement}
          reset={reset}
          isLoading={isLoading}
          min={1}
          max={4}
        />
      </div>
      <code className="d-block mb-5">
        <b>Quotes size:</b> {JSON.stringify(quotesSize)}
      </code>
      <div className="div" ref={quotesRef}>
        <Quotes isLoading={isLoading} quotesData={data} />
      </div>
    </div>
  )
}

export default Layout
