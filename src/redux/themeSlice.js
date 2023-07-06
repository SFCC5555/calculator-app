import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('themeStorage')?localStorage.getItem('themeStorage'):'1'

export const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers: {
        changeTheme: (state,action)=>{

            state = action.payload;

            localStorage.setItem('themeStorage',state)

            return state;

        }
    }

})

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;