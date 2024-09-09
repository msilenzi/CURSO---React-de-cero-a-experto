import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onSetActiveEvent } from '../store/index'

export function useCalendarStore() {
  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector((state) => state.calendar)

  function setActiveEvent(calendarEvent) {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  async function startSavingEvent(calendarEvent) {
    // TODO: enviar al backend

    // OK
    if (calendarEvent._id) {  // Actualizando un evento
      
    } else {  // Creando un evento  
      dispatch(onAddNewEvent({ ...calendarEvent, _id: Date.now() }))
    }
  }

  return {
    //* Properties
    events,
    activeEvent,

    //* Methods
    setActiveEvent,
    startSavingEvent,
  }
}
