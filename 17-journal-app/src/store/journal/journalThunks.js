import { firebaseDB } from 'firebase/config'
import { collection, doc, setDoc } from 'firebase/firestore/lite'
import {
  addNewEmptyNote,
  finishSaving,
  setActiveNote,
  setNotes,
  startSaving,
} from './journalSlice'
import { loadNotes } from '@Journal/utils'

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

export function startLoadingNotes() {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    if (!uid) throw new Error("The user doesn't exist")
    const notes = await loadNotes(uid)
    dispatch(setNotes(notes))
  }
}
