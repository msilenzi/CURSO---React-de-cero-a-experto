import { useRef } from 'react'

function FocusScreen() {
  const inputRef = useRef()

  function handleClick() {
    inputRef.current.select()
  }

  return (
    <div style={{ width: '320px' }}>
      <h3 className="mb-4">FocusScreen</h3>
      <input
        ref={inputRef}
        type="text"
        className="form-control mb-4"
        placeholder="Ingrese su nombre"
      />
      <button className="btn btn-primary d-block ms-auto" onClick={handleClick}>
        Focus
      </button>
    </div>
  )
}

export default FocusScreen
