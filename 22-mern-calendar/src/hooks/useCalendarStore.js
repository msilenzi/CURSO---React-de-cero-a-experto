import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '@Store'
import { useDispatch, useSelector } from 'react-redux'

export default function useCalendarStore() {
  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector((state) => state.calendar)

  function setActiveEvent(calendarEvent) {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  async function startSavingEvent(calendarEvent) {
    // TODO: enviar al backend

    if (calendarEvent._id) {
      // Actualizando un evento
      dispatch(onUpdateEvent({ ...calendarEvent }))
    } else {
      // Creando un evento
      dispatch(onAddNewEvent({ ...calendarEvent, _id: Date.now() }))
    }
  }

  async function startDeletingEvent() {
    dispatch(onDeleteEvent())
  }

  return {
    //* Properties
    events,
    activeEvent,

    //* Methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  }
}
