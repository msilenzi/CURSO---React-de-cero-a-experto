import PropTypes from 'prop-types'

function FirstApp({ title, subtitle }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle + 1}</h2>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
  title: 'No hay título'
}

export default FirstApp
