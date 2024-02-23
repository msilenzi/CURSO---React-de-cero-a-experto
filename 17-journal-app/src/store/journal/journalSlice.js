import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  notes: [],
  activeNote: null,
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
      state.activeNote = action.payload
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
} = journalSlice.actions
