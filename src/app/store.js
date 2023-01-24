import { configureStore } from '@reduxjs/toolkit'
import ItemsReducer from 'features/items/ItemsSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    items: ItemsReducer,
  },
})
