import { useDispatch, useSelector } from 'react-redux'
import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
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
    <IconButton
      size="large"
      sx={{
        position: 'fixed',
        right: 16,
        bottom: 16,
        color: 'white',
        bgcolor: 'error.main',
        ':hover': { bgcolor: 'error.light' },
        ':disabled': {
          color: 'white',
          bgcolor: 'error.dark',
        },
      }}
      disabled={isSaving}
      onClick={handleClick}
    >
      <AddOutlined sx={{ fontSize: 28 }} />
    </IconButton>
  )
}

export default JournalPage
