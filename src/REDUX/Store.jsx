import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './UserSlice'

export const store = configureStore({
  reducer: {
    user : userSlice
  },
})
export default store;