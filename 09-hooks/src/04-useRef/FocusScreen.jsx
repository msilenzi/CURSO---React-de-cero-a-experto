import { useRef } from 'react'
import SectionTitle from '@UI/SectionTitle'

function FocusScreen() {
  const inputRef = useRef()

  function handleClick() {
    inputRef.current.select()
  }

  return (
    <div style={{ width: '320px' }}>
      <SectionTitle text='FocusScreen' />
      <input
        ref={inputRef}
        type="text"
        className="form-control form-dark mb-4"
        placeholder="Ingrese su nombre"
      />
      <button className="btn btn-primary d-block ms-auto" onClick={handleClick}>
        Focus
      </button>
    </div>
  )
}

export default FocusScreen
