import PropTypes from 'prop-types'

function PageTitle({ title }) {
  return <h1 className="my-5 animate__animated animate__fadeInDown">{title}</h1>
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export { PageTitle }
