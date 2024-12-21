import { login, refreshToken, register } from '@Api'
import { onChecking, onLogin, onLogout } from '@Store'
import { useCallback } from 'react'
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

  function logout() {
    localStorage.removeItem('token')
    dispatch(onLogout(null))
  }

  async function _handleAuth(authRequest) {
    dispatch(onChecking())

    try {
      const { data } = await authRequest()
      if (data.ok) {
        localStorage.setItem('token', data.payload.token)
        dispatch(onLogin({ id: data.payload.id, name: data.payload.name }))
      }
    } catch (error) {
      dispatch(onLogout(error.response.data.msg))
    }
  }

  const checkToken = useCallback(async () => {
    const token = localStorage.getItem('token')
    if (!token) return dispatch(onLogout())

    try {
      const { data } = await refreshToken()
      localStorage.setItem('token', data.payload.token)
      dispatch(onLogin({ id: data.payload.id, name: data.payload.name }))
    } catch (error) {
      dispatch(onLogout(null))
      localStorage.removeItem('token')
    }
  }, [dispatch])

  return {
    status,
    user,
    errorMessage,
    startLogin,
    startRegister,
    logout,
    checkToken,
  }
}
