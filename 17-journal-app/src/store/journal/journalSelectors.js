export function selectActiveNote(state) {
  return state.journal.unsavedNotes[state.journal.activeNoteId].note
}
