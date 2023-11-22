import { createSelector } from "@reduxjs/toolkit";

const selectRootState = ({ root: output = {}}) => output;
const selectError = createSelector(selectRootState, (state) => state.error);
const selectIsLoading = createSelector(selectRootState, (state) => state.isLoading);

export const rootStateSelectors = {
    selectError,
    selectIsLoading,
}
