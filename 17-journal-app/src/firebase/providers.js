import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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
