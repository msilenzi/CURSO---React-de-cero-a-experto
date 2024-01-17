import { useCounter, useFetch } from '@Hooks'
import Quotes from './Quotes'
import Counter from './Counter'

function MultipleHooks() {
  const { counter, increment, decrement, reset } = useCounter(1, {
    min: 1,
    max: 4,
  })

  const { data, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  )

  return (
    <div style={{ width: '460px' }}>
      <h3 className="mb-4">Beraking Bad Quotes</h3>
      <div className="mb-5">
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
      <Quotes isLoading={isLoading} quotesData={data} />
    </div>
  )
}

export default MultipleHooks
