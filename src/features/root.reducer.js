import authReducer from './connextionSlice'
import { createAction } from '@reduxjs/toolkit'

export const logout = createAction('logout')

export const rootReducer = (state, action) => {
  if (action.type === 'logout') {
    // check for action type
    state = undefined
  }
  return authReducer(state, action)
}
