import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from "../features/slices/sliderSlice"
export const store = configureStore({
    reducer: {
        slider: sliderReducer,  // Import your slices here
        // Define your reducers here
    },
});