import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import addHours from 'date-fns/addHours'

import Container from 'react-bootstrap/Container'

import { CalendarNavbar } from '@Calendar/components'
import { calendarLocalizer } from '@Calendar/utils'

const events = [
  {
    title: 'Cumpleaños del Jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#1f1f1f',
    user: {
      id: '1234',
      name: 'Manuel',
    },
  },
]

function CalendarPage() {
  function eventStyleGetter(event, start, end, isSelected) {
    const style = {
      backgroundColor: 'var(--bs-dark)',
      borderRadius: '0',
      opacity: '0.8',
      color: 'var(--bs-light)',
    }

    return {
      style,
    }
  }

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100svh' }}>
      <CalendarNavbar />
      <Container className="d-flex flex-column flex-grow-1 py-3">
        <Calendar
          localizer={calendarLocalizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          className="flex-grow-1"
          eventPropGetter={eventStyleGetter}
        />
      </Container>
    </div>
  )
}

export default CalendarPage
