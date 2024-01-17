import PropTypes from 'prop-types'

function ShowIncrement({ increment }) {
  console.log('Rendering <ShowIncrement />')

  return (
    <button className="btn btn-dark ms-auto d-block" onClick={() => increment(5)}>
      Increment
    </button>
  )
}

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
}

export default ShowIncrement
