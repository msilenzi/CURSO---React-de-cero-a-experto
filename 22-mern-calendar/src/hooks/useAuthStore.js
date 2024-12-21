import { login, register } from '@Api'
import { onChecking, onLogin, onLogout } from '@Store'
import { useDispatch, useSelector } from 'react-redux'

export default function useAuthStore() {
  const { status, user, errorMessage } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  async function startLogin(credentials) {
    _handleAuth(() => login(credentials))
  }

  async function startRegister(user) {
    _handleAuth(() => register(user))
  }

  async function _handleAuth(authRequest) {
    dispatch(onChecking())

    try {
      const resp = await authRequest()
      if (resp.data.ok) {
        localStorage.setItem('token', resp.data.payload.token)
        dispatch(
          onLogin({ id: resp.data.payload.id, name: resp.data.payload.name })
        )
      }
    } catch (error) {
      dispatch(onLogout(error.response.data.msg))
    }
  }

  return {
    status,
    user,
    errorMessage,
    startLogin,
    startRegister,
  }
}
