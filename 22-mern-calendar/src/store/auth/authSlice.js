import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // 'checking' | 'authenticated' | 'not-authenticated'
    user: null,
    errorMessage: null,
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking'
      state.user = {}
      state.errorMessage = null
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated'
      state.user = payload
      state.errorMessage = null
    },
    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.user = null
      state.errorMessage = payload
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null
    },
  },
})

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions
