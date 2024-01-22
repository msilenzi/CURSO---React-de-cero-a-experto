import { useCallback, useState } from 'react'
import Hijo from './Hijo'
import SectionTitle from '@UI/SectionTitle'


function Padre() {
  const numeros = [2, 4, 6, 8, 10]
  const [valor, setValor] = useState(0)

  const incrementar = useCallback((num) => {
    setValor((prevValor) => prevValor + num)
  }, [])

  return (
    <div>
      <SectionTitle text='Padre' />
      <p className="fs-4 mb-4">
        Total: <b>{valor}</b>
      </p>

      <div className="d-flex gap-2">
        {numeros.map((n) => (
          <Hijo key={n} numero={n} incrementar={incrementar} />
        ))}
      </div>
    </div>
  )
}

export default Padre
