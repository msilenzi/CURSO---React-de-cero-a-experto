import PropTypes from 'prop-types'

function FirstApp({ title, subtitle, name }) {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <h2>{subtitle}</h2>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string,
}

FirstApp.defaultProps = {
  subtitle: 'No hay subtítulo',
  name: 'Manuel Silenzi',
}

export default FirstApp
