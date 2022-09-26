import { createSlice } from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    isModalOpen: false,
    modalImageUrl: "",
    modalUserName: "",
    modalUserLocation: ""
  },
  reducers: {
    toggleModal: (state) => {
        state.isModalOpen = !state.isModalOpen
    },
    setProps: (state, action) => {
        state.modalImageUrl = action.payload.modalImageUrl;
        state.modalUserName = action.payload.modalUserName;
        state.modalUserLocation = action.payload.modalUserLocation;
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleModal, setProps } = toggleSlice.actions

export default toggleSlice.reducer