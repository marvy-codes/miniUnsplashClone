import { createSlice } from '@reduxjs/toolkit'
// import { getPictures } from '../../api/api'

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    images: [],
    fetching: false,
    err: ""
    
  },
  reducers: {
    fetchImages: (state, action) => {
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchImages } = imageSlice.actions

export default imageSlice.reducer