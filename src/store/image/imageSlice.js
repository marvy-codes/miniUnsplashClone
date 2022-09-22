import { createSlice } from '@reduxjs/toolkit'

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    images: [],
    isFetching: false,
    err: ""
    
  },
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload
    },
    toggleFetch: (state) => {
      state.isFetching = !state.isFetching
    }
  },
})

// Action creators are generated for each case reducer function
export const { setImages,toggleFetch } = imageSlice.actions

export default imageSlice.reducer