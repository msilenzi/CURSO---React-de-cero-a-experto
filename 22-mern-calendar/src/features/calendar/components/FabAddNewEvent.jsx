import { Fab } from 'components'
import { addHours } from 'date-fns'
import { useCalendarStore, useUiStore } from 'hooks'

function FabAddNewEvent() {
  const { openDateModal } = useUiStore()
  const { setActiveEvent } = useCalendarStore()

  function handleClickNew() {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#1f1f1f',
      user: {
        id: '1234',
        name: 'Manuel',
      },
    })
    openDateModal()
  }

  return (
    <Fab
      variant="primary"
      size="lg"
      position={{ bottom: '1.5rem', right: '1.5rem' }}
      fontAwesomIcon="fas fa-plus"
      onClick={handleClickNew}
    />
  )
}

export default FabAddNewEvent
