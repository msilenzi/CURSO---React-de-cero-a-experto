import { useState } from 'react'

import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import Container from 'react-bootstrap/Container'

import {
  CalendarEventBox,
  CalendarModal,
  CalendarNavbar,
  FabAddNewEvent,
} from '@Calendar/components'
import { calendarLocalizer } from '@Calendar/utils'
import { useUiStore, useCalendarStore } from 'hooks'

function CalendarPage() {
  const { events, setActiveEvent } = useCalendarStore()
  const { openDateModal } = useUiStore()

  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') ?? 'month'
  )

  function eventStyleGetter() {
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

  function onDoubleClick() {
    openDateModal()
  }

  function onSelect(e) {
    setActiveEvent(e)
  }

  function onViewChange(e) {
    localStorage.setItem('lastView', e)
    setLastView(e)
  }

  return (
    <>
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
      <CalendarModal />
      <FabAddNewEvent />
    </>
  )
}

export default CalendarPage
