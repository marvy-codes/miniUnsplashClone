import { createSlice } from '@reduxjs/toolkit'

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    images: [],
    fetching: false,
    err: ""
    
  },
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setImages } = imageSlice.actions

export default imageSlice.reducer