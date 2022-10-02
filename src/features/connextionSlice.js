import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'void',
  error: {
    message: null,
    status: null,
  },
  token: null,
  isAuthenticate: false,
  user: {
    id: null,
    firstName: null,
    lastName: null,
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authFetching(state) {
      if (state.status === 'void') {
        return {
          ...state,
          status: 'pending',
        }
      }
      if (state.status === 'rejected') {
        return {
          ...state,
          error: {
            ...state.error,
            message: null,
            status: null,
          },
          status: 'pending',
        }
      }
      if (state.status === 'resolved') {
        return {
          ...state,
          status: 'updating',
        }
      }
    },
    authResolved(state, action) {
      if (state.status === 'pending') {
        return {
          ...state,
          status: 'resolved',
          isAuthenticate: true,
          token: action.payload.token,
          user: {
            ...state.user,
            id: action.payload.id,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
          },
        }
      }
      if (state.status === 'updating') {
        return {
          ...state,
          status: 'resolved',
          user: {
            ...state.user,
            id: action.payload.id,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
          },
        }
      }
    },
    authRejected(state, action) {
      if (state.status === 'pending' || state.status === 'updating') {
        return {
          ...state,
          status: 'rejected',
          error: {
            ...state.error,
            message: action.payload.message,
            status: action.payload.status,
          },
          isAuthenticate: false,
        }
      }
    },
  },
})

export const { authFetching, authRejected, authResolved } = authSlice.actions
export default authSlice.reducer
