import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from 'firebase/config'
import { login, logout } from '@Store/auth'

function useCheckAuth() {
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) {
        dispatch(logout())
        return
      }
      const { uid, email, displayName, photoURL } = user
      dispatch(login({ uid, email, displayName, photoURL }))
    })
  }, [dispatch])

  return { status }
}

export default useCheckAuth
