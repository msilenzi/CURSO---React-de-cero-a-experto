import { firebaseDB } from 'firebase/config'
import { collection, doc, setDoc } from 'firebase/firestore/lite'
import {
  addNewEmptyNote,
  clearUnsavedImages,
  finishSaving,
  setActiveNote,
  setNotes,
  startSaving,
  updateActiveNote,
  updateNote,
} from './journalSlice'
import { loadNotes, uploadUnsavedImages } from '@Journal/utils'
import {
  selectActiveNote,
  selectActiveNoteUnsavedImages,
} from './journalSelectors'

export function startNewNote() {
  return async (dispatch, getState) => {
    dispatch(startSaving())
    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: Date.now(),
      images: [],
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

export function startSavingNote() {
  return async (dispatch, getState) => {
    dispatch(startSaving())

    const { uid } = getState().auth
    const activeNote = selectActiveNote(getState())
    const unsavedImages = selectActiveNoteUnsavedImages(getState())

    const images = await uploadUnsavedImages(unsavedImages)

    const newNote = { ...activeNote }
    newNote.images = newNote.images.concat(images)
    delete newNote.id

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${activeNote.id}/`)
    await setDoc(docRef, newNote, { merge: true })

    dispatch(updateNote(activeNote))
    dispatch(updateActiveNote({ id: activeNote.id, ...newNote }))
    dispatch(clearUnsavedImages())
    dispatch(finishSaving())
  }
}
