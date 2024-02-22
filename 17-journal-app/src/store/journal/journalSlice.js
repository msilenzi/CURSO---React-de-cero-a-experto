import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  savedMessage: '',
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

    setSaving: (state) => {},
    updateNote: (state, action) => {},
    deleteNoteById: (state, action) => {},
  },
})

export const {
  startSaving,
  finishSaving,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions
