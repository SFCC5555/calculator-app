import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice.js';
import displayReducer from './displaySlice.js';


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        display: displayReducer,

    }
})