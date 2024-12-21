import axios from 'axios'

const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/auth',
})

export function login(credentials) {
  return authApi.post('/login', credentials)
}

export function register(user) {
  return authApi.post('/signup', user)
}
