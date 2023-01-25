import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 41, title: 'Gawen', price: '0', quantity: '718' },
  { id: 42, title: 'Mollie', price: '1975', quantity: '4990' },
  { id: 43, title: 'Alvis', price: '1048', quantity: '74' },
  { id: 44, title: 'Abigael', price: '1148', quantity: '32' },
  { id: 45, title: 'Mavra', price: '670', quantity: '450' },
  { id: 46, title: 'Jacklin', price: '20', quantity: '633' },
  { id: 47, title: 'Zed', price: '476', quantity: '902' },
  { id: 48, title: 'Clair', price: '197', quantity: '570' },
  { id: 49, title: 'Stewart', price: '3590', quantity: '3100' },
  { id: 50, title: 'Tore', price: '53', quantity: '156' },
]

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
