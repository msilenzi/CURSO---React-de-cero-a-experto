import { useDispatch, useSelector } from 'react-redux'
import { onSetActiveEvent } from '../store/index'

export function useCalendarStore() {
  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector((state) => state.calendar)

  function setActiveEvent(calendarEvent) {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  return {
    //* Properties
    events,
    activeEvent,

    //* Methods
    setActiveEvent,
  }
}
