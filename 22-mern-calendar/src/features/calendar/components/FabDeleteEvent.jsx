import { Fab } from 'components'
import { useCalendarStore } from 'hooks'

function FabDeleteEvent() {
  const { activeEvent, startDeletingEvent } = useCalendarStore()

  function handleClickDelete() {
    startDeletingEvent()
  }

  if (activeEvent == null) return

  return (
    <Fab
      variant="danger"
      size="lg"
      position={{ bottom: '1.5rem', right: '5.5rem' }}
      fontAwesomIcon="fas fa-trash-alt"
      onClick={handleClickDelete}
    />
  )
}

export default FabDeleteEvent
