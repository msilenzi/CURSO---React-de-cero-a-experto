import PropTypes from 'prop-types'

function SectionTitle({ text }) {
  return <h3 className="mb-4">{text}</h3>
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
}

export default SectionTitle
