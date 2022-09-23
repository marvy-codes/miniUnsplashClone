import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    images: [],
    isFetching: false,
    searchWord: "",
    err: ""
    
  },
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload
    },
    toggleFetch: (state) => {
      state.isFetching = !state.isFetching
    },
    setSearchWord: (state, action) => {
      state.searchWord = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setImages, toggleFetch, setSearchWord } = imageSlice.actions

export default imageSlice.reducer