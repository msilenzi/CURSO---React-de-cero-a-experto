import { firebaseDB } from 'firebase/config'
import { collection, doc, setDoc } from 'firebase/firestore/lite'
import {
  addNewEmptyNote,
  finishSaving,
  setActiveNote,
  startSaving,
} from './journalSlice'

export function startNewNote() {
  return async (dispatch, getState) => {
    dispatch(startSaving())
    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: Date.now(),
    }

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)

    newNote.id = newDoc.id

    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
    dispatch(finishSaving())
  }
}
