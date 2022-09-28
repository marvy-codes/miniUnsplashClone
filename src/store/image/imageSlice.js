import { createSlice } from '@reduxjs/toolkit'

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    images: [],
    isFetching: false,
    searchWord: "car",
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