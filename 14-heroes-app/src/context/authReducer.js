import { authTypes } from '@Types'

export function authReducer(state, action) {
  switch (action.type) {
    case authTypes.login:
      return {
        logged: true,
        name: action.payload,
        ...state,
      }

    case authTypes.logout:
      return {
        logged: false,
        name: null,
        ...state,
      }

    default:
      return state
  }
}
