import { configureStore } from '@reduxjs/toolkit'
import imageReducer from "./image/imageSlice"
import toggleReducer from "./toggle/toggleSlice"

export const store = configureStore({
    reducer: {
        image: imageReducer,
        toggle: toggleReducer
    }
});