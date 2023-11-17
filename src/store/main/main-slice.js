import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    costsData: [],
    error: null,
    isLoading: false,
    showSuccessMessage: false,
    showNewCostModal: false
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setCostsData: (state, { payload }) => {
            state.costsData = Object.keys(payload).map((id) => ({ ...payload[id], id }))
        },
        addCost: (state, action) => {
            state.costsData = [action.payload, ...state.costsData];
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setShowSuccessMessage: (state, action) => {
            state.showSuccessMessage = action.payload
        },
        setShowNewCostModal: (state, action) => {
            state.showNewCostModal = action.payload
        }
    }
});

