import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import addHours from 'date-fns/addHours'

import Container from 'react-bootstrap/Container'

import { CalendarEventBox, CalendarNavbar } from '@Calendar/components'
import { calendarLocalizer } from '@Calendar/utils'
import { useState } from 'react'

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
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') ?? 'month'
  )

  function eventStyleGetter(event, start, end, isSelected) {
    const style = {
      backgroundColor: 'var(--bs-primary)',
      borderRadius: '0',
      opacity: '0.8',
      color: 'var(--bs-light)',
    }

    return {
      style,
    }
  }

  function onDoubleClick(e) {
    console.log('onDoubleClick', e)
  }

  function onSelect(e) {
    console.log('onSelect', e)
  }

  function onViewChange(e) {
    localStorage.setItem('lastView', e)
    setLastView(e)
  }

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100svh' }}>
      <CalendarNavbar />
      <Container className="d-flex flex-column flex-grow-1 py-3">
        <Calendar
          className="flex-grow-1"
          localizer={calendarLocalizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView={lastView}
          eventPropGetter={eventStyleGetter}
          components={{
            event: CalendarEventBox,
          }}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelect}
          onView={onViewChange}
        />
      </Container>
    </div>
  )
}

export default CalendarPage
