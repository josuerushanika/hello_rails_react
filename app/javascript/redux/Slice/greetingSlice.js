import axios from  "axios"
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const initialState = {
    greetingstore: [],
    status: 'idle',
    error: null
};

const BASE_URL = "/api/greetings";

export const fetchGreeting = createAsyncThunk(
    "greetings/fetchgreetings",
    async () => {
        const response = await fetch(BASE_URL);
        const data = await response.json()
        return data
    }
);

const greetingSlice = createSlice({
    name: "greetings",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchGreeting.pending, (state) => {
            state.status = 'Loading';
        });

        builder.addCase(fetchGreeting.fulfilled, (state, action) =>({
            ...state,
            greetingstore: action.payload,
            status: 'Succeed'
        }) );

        builder.addCase(fetchGreeting.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        });

    }
})

export default greetingSlice.reducer;