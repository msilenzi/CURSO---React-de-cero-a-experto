import PropTypes from 'prop-types'

function CalendarEventBox(props) {
  const { event } = props

  return (
    <>
      <b>{event.title}</b> - {event.user.name}
    </>
  )
}

export default CalendarEventBox

CalendarEventBox.propTypes = {
  event: PropTypes.object.isRequired,
}
