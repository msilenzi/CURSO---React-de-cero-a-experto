import { login } from '@Api'
import { onChecking, onLogin, onLogout } from '@Store'
import { useDispatch, useSelector } from 'react-redux'

export default function useAuthStore() {
  const { status, user, errorMessage } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  async function startLogin(credentials) {
    dispatch(onChecking())

    try {
      const resp = await login(credentials)

      if (resp.data.ok) {
        localStorage.setItem('token', resp.data.payload.token)
        dispatch(
          onLogin({ id: resp.data.payload.id, name: resp.data.payload.name })
        )
      }
    } catch (error) {
      dispatch(onLogout('Invalid email or password'))
      // setTimeout(() => dispatch(clearErrorMessage()), 1)
    }
  }

  return {
    status,
    user,
    errorMessage,
    startLogin,
  }
}
