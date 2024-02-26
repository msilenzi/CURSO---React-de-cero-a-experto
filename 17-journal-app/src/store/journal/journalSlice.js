import { createSlice } from '@reduxjs/toolkit'

/**
 * Represents an image associated with a note.
 * @typedef {Object} Image
 * @property {string} src - The URL of the image.
 * @property {string} title - The title of the image.
 */

/**
 * Represents a note in the journal.
 * @typedef {Object} JournalNote
 * @property {string} id - The ID of the note.
 * @property {number} date - The date of the note (in milliseconds since January 1, 1970).
 * @property {string} title - The title of the note.
 * @property {string} body - The body content of the note.
 * @property {Image[]} images - The array of images associated with the note.
 */

/**
 * Represents an unsaved note with associated images.
 * @typedef {Object} UnsavedNote
 * @property {JournalNote} note - The unsaved note.
 * @property {UnsavedImage[]} unsavedImages - The array of unsaved images associated with the note.
 */

/**
 * Initial state for the journal slice.
 * @typedef {Object} JournalInitialState
 * @property {boolean} isSaving - Indicates whether changes are being saved.
 * @property {JournalNote[]} notes - The list of notes.
 * @property {string|null} activeNoteId - The ID of the active note.
 * @property {Object.<string, UnsavedNote>} unsavedNotes - Unsaved notes, indexed by note ID.
 */

/** @type {JournalInitialState} */
const initialState = {
  isSaving: false,
  notes: [],
  activeNoteId: null,
  unsavedNotes: {},
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    startSaving: (state) => {
      state.isSaving = true
    },

    finishSaving: (state) => {
      state.isSaving = false
    },

    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
    },

    setActiveNote: (state, action) => {
      state.activeNoteId = action.payload.id

      if (
        !Object.prototype.hasOwnProperty.call(
          state.unsavedNotes,
          action.payload.id
        )
      ) {
        state.unsavedNotes[action.payload.id] = {
          note: action.payload,
          unsavedImages: [],
        }
      }
    },

    updateActiveNote: (state, action) => {
      state.unsavedNotes[action.payload.id].note = action.payload
    },

    addUnsavedImages: (state, action) => {
      state.unsavedNotes[state.activeNoteId].unsavedImages = state.unsavedNotes[
        state.activeNoteId
      ].unsavedImages.concat(action.payload)
    },

    deleteUnsavedImage: (state, action) => {
      state.unsavedNotes[state.activeNoteId].unsavedImages = state.unsavedNotes[
        state.activeNoteId
      ].unsavedImages.filter((image) => image.src !== action.payload.src)
    },

    renameUnsavedImage: (state, action) => {
      const { image, value } = action.payload

      const unsavedImages = state.unsavedNotes[state.activeNoteId].unsavedImages
      const imageToUpdate = unsavedImages.find((img) => img.src === image.src)

      if (imageToUpdate) {
        imageToUpdate.title = value
      }
    },

    clearUnsavedImages: (state) => {
      state.unsavedNotes[state.activeNoteId].unsavedImages = []
    },

    setNotes: (state, action) => {
      state.notes = action.payload
    },

    updateNote: (state, action) => {
      const noteIndex = state.notes.findIndex(
        ({ id }) => id === action.payload.id
      )
      state.notes[noteIndex] = action.payload
    },

    deleteNoteById: (state, action) => {},
  },
})

export const {
  startSaving,
  finishSaving,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  updateNote,
  deleteNoteById,
  updateActiveNote,
  deleteUnsavedImage,
  addUnsavedImages,
  renameUnsavedImage,
  clearUnsavedImages,
} = journalSlice.actions
