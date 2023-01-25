import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload)
    },
    editItem: (state, action) => {
      const { id, title, price, quantity } = action.payload
      const existingItem = state.find((item) => item.id === id)
      if (existingItem) {
        existingItem.title = title
        existingItem.price = price
        existingItem.quantity = quantity
      }
    },
    deleteItem: (state, action) => {
      const { id } = action.payload
      const existingItem = state.find((item) => item.id === id)
      if (existingItem) {
        return state.filter((item) => item.id !== id)
      }
    },
  },
})

export const { addItem, editItem, deleteItem } = itemsSlice.actions
export default itemsSlice.reducer
