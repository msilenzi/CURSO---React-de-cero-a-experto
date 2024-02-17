import { signInWithGoogle } from 'firebase/providers'
import { checkingCredentials, login, logout } from './authSlice'

export function checkAuth(email, password) {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export function startGoogleSignIn() {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await signInWithGoogle()

    if (!result.ok) {
      dispatch(logout({ errorMessage: result.errorMessage }))
      return
    }

    dispatch(login({ ...result }))
  }
}
