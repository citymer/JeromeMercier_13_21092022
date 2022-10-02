import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/connextionSlice'

export const store = configureStore({
  reducer: {
    connect: authSlice,
  },
})
