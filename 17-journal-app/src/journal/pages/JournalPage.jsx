import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { JournalLayout } from '@Journal/Layout'
import { NoteView, NothingSelectedView } from '@Journal/views'

function JournalPage() {
  return (
    <>
      <JournalLayout>
        {/* <NothingSelectedView /> */}
        <NoteView />
      </JournalLayout>
      <NewEntryBtn />
    </>
  )
}

function NewEntryBtn() {
  return (
    <IconButton
      size="large"
      sx={{
        position: 'fixed',
        right: 28,
        bottom: 28,
        color: 'white',
        bgcolor: 'error.main',
        ':hover': {bgcolor: 'error.light'}
      }}
    >
      <AddOutlined sx={{ fontSize: 28 }} />
    </IconButton>
  )
}

export default JournalPage
