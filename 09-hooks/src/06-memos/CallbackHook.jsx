import { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement'
import SectionTitle from '@UI/SectionTitle'

function CallbackHook() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = useCallback((step) => {
    // No funciona porque el valor del estado también es memorizado.
    // La función sí se llama, pero siempre con el mismo valor de counter.
    // setCounter(counter + 1)

    setCounter((prevCounter) => prevCounter + step)
  }, [])

  return (
    <div style={{ width: '320px' }}>
      <SectionTitle text="CallbackHook" />
      <p className="m-0 fs-4 mb-4">
        Counter: <b>{counter}</b>
      </p>
      <ShowIncrement increment={incrementCounter} />
    </div>
  )
}
export default CallbackHook
