import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  surname: '',
  age: '',
  sex: '',
  country: '',
  email: '',
  phone_number: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setSurname: (state, action) => {
      state.surname = action.payload
    },
    setAge: (state, action) => {
      state.age = action.payload
    },
    setSex: (state, action) => {
      state.sex = action.payload
    },
    setCounty: (state, action) => {
      state.country = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPhoneNumber: (state, action) => {
      state.phone_number = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setName,
  setSurname,
  setAge,
  setSex,
  setCounty,
  setEmail,
  setPhoneNumber,
} = userSlice.actions

export default userSlice.reducer
