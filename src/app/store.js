import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from './userData'
export const store = configureStore({
  reducer: {
    userDataR:userDataReducer
  },
})