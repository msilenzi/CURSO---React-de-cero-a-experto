export function selectActiveNote(state) {
  return state.journal.unsavedNotes[state.journal.activeNoteId].note
}

export function selectActiveNoteUnsavedImages(state) {
  return state.journal.unsavedNotes[state.journal.activeNoteId].unsavedImages
}
