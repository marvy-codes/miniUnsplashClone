import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    isModalOpen: false,
    modalProps: {
      modalImageUrl: "",
      modalUserName: "",
      modalUserLocation: ""
    }
  },
  reducers: {
    toggleModal: (state) => {
        state.isModalOpen = !state.isModalOpen
    },
    setProps: (state, action) => {
        state.modalProps.modalImageUrl = action.payload.modalImageUrl;
        state.modalProps.modalUserName = action.payload.modalUserName;
        state.modalProps.modalUserLocation = action.payload.modalUserLocation;
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleModal, setProps } = toggleSlice.actions;

export default toggleSlice.reducer;