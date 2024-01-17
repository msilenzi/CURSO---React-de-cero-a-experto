import React from 'react'
import PropTypes from 'prop-types'

const Hijo = React.memo(function Hijo({ numero, incrementar }) {
  console.log('  Me volví a generar :(  ')

  return (
    <button className="btn btn-dark" onClick={() => incrementar(numero)}>
      {numero}
    </button>
  )
})

Hijo.propTypes = {
  numero: PropTypes.number.isRequired,
  incrementar: PropTypes.func.isRequired,
}

export default Hijo
