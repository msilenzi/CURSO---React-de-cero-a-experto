import axios from 'axios'

const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/auth',
})

authApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: localStorage.getItem('token'),
  }
  return config
})

export function login(credentials) {
  return authApi.post('/login', credentials)
}

export function register(user) {
  return authApi.post('/signup', user)
}

export function refreshToken() {
  return authApi.get('/refresh')
}
