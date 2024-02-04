import { JournalLayout } from '@Journal/Layout'
import { NoteView, NothingSelectedView } from '@Journal/views'

function JournalPage() {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  )
}

export default JournalPage
