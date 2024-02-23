import { useDispatch, useSelector } from 'react-redux'
import { AddOutlined } from '@mui/icons-material'
import { Fab } from '@mui/material'
import { JournalLayout } from '@Journal/Layout'
import { NoteView, NothingSelectedView } from '@Journal/views'
import { startNewNote } from '@Store/journal'

function JournalPage() {
  const { activeNote } = useSelector((state) => state.journal)

  return (
    <>
      <JournalLayout>
        {activeNote == null ? <NothingSelectedView /> : <NoteView />}
      </JournalLayout>
      <NewEntryBtn />
    </>
  )
}

function NewEntryBtn() {
  const { isSaving } = useSelector((state) => state.journal)

  const dispatch = useDispatch()

  function handleClick() {
    dispatch(startNewNote())
  }

  return (
    <Fab
      color="error"
      sx={{
        position: 'fixed',
        right: 16,
        bottom: 16,
      }}
      disabled={isSaving}
      onClick={handleClick}
    >
      <AddOutlined />
    </Fab>
  )
}

export default JournalPage
