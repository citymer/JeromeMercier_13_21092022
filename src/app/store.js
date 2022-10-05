import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../features/root.reducer'

export const store = configureStore({
  reducer: rootReducer,
})
