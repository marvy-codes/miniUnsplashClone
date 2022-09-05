import { createSlice } from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    isModalOpen: false
  },
  reducers: {
    toggleModal: (state) => {
        state.isModalOpen = !state.isModalOpen
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchImages } = toggleSlice.actions

export default toggleSlice.reducer