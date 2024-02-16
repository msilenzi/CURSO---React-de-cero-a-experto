import { checkingCredentials } from './authSlice'

export function checkAuth(email, password) {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export function startGoogleSignIn() {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}
