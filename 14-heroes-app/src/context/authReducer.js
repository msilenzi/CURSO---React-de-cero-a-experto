import { authTypes } from '@Types'

export function authReducer(state, action) {
  switch (action.type) {
    case authTypes.login:
      return {
        ...state,
        logged: true,
        name: action.payload,
      }

    case authTypes.logout:
      return {
        ...state,
        logged: false,
        name: null,
      }

    default:
      throw Error('Unknown action: ' + action.type)
  }
}
