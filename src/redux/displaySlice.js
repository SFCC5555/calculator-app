import { createSlice } from "@reduxjs/toolkit";

const initialState = '0'

export const displaySlice = createSlice({
    name:'display',
    initialState,
    reducers: {
        changeDisplay: (state,action)=>{

            state = action.payload;

            return state;

        }
    }

})

export const {changeDisplay} = displaySlice.actions;
export default displaySlice.reducer;