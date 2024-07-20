import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movieData",
    initialState: [],
    reducers:{
        addMovie: (state,action)=>{
            return action.payload;
        }
    }
})

export default movieSlice.reducer;
export const {addMovie}= movieSlice.actions;