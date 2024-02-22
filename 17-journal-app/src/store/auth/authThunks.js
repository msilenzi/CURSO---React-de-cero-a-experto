import {
  loginWithEmailAndPassword,
  logoutSesion,
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

export function startCreatingUserWithEmailAndPassword({
  firstName,
  lastName,
  email,
  password,
}) {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const displayName = `${firstName.trim()} ${lastName.trim()}`

    const { ok, uid, errorMessage } = await registerUserWithEmailAndPassword({
      email,
      password,
      displayName,
    })

    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(
      login({
        uid,
        email,
        displayName,
        photoURL: null,
      })
    )
  }
}

export function startLoginWithEmailAndPassword({ email, password }) {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const { ok, uid, displayName, errorMessage } =
      await loginWithEmailAndPassword({
        email,
        password,
      })

    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(
      login({
        uid,
        email,
        displayName,
        photoURL: null,
      })
    )
  }
}

export function startLogout() {
  return async (dispatch) => {
    await logoutSesion()
    dispatch(logout())
  }
}
