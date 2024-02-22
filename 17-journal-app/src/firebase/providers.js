import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import { firebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider)
    // const credentials = GoogleAuthProvider.credentialFromResult(result)
    return {
      ok: true,
      displayName: result.user.displayName,
      email: result.user.email,
      photoURL: result.user.photoURL,
      uid: result.user.uid,
    }
  } catch (error) {
    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message,
    }
  }
}

export async function registerUserWithEmailAndPassword({
  email,
  password,
  displayName,
}) {
  try {
    const resp = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )
    const { uid } = resp.user

    await updateProfile(firebaseAuth.currentUser, { displayName })

    return {
      ok: true,
      uid,
      email,
    }
  } catch (error) {
    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message,
    }
  }
}

export async function loginWithEmailAndPassword({ email, password }) {
  try {
    const resp = await signInWithEmailAndPassword(firebaseAuth, email, password)
    const { uid, displayName } = resp.user
    return {
      ok: true,
      uid,
      displayName,
    }
  } catch (error) {
    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message,
    }
  }
}
