import { createSelector } from "@reduxjs/toolkit";

const selectAuthState = ({ auth: output = {}}) => output;
const selectIsLoggedIn = createSelector(selectAuthState, (state) => state.isLoggedIn);

export const authStateSelectors = {
    selectIsLoggedIn
}
