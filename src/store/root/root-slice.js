import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    isLoading: false,
}

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
});
