import {
  registerUserWithEmailAndPassword,
  signInWithGoogle,
} from 'firebase/providers'
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

export function startCreatingUserWithEmailAndPassword(userData) {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const displayName = `${userData.firstName.trim()} ${userData.lastName.trim()}`

    const { ok, uid, errorMessage } = await registerUserWithEmailAndPassword({
      email: userData.email,
      password: userData.password,
      displayName,
    })

    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(
      login({
        uid,
        email: userData.email,
        displayName,
        photoURL: null,
      })
    )
  }
}
