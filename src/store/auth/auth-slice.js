import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn(state) {
            state.isLoggedIn = true;
        },
        logOut(state) {
            state.isLoggedIn = false;
        }
    }
}) 