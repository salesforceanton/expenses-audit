import { createSelector } from "@reduxjs/toolkit";

const selectMainState = ({ main: output = {}}) => output;
const selectCostsData = createSelector(selectMainState, (state) => state.costsData);
const selectError = createSelector(selectMainState, (state) => state.error);
const selectIsLoading = createSelector(selectMainState, (state) => state.isLoading);
const selectShowSuccessMessage = createSelector(selectMainState, (state) => state.showSuccessMessage);
const selectShowNewCostModal = createSelector(selectMainState, (state) => state.showNewCostModal);

export const mainStateSelectors = {
    selectCostsData,
    selectError,
    selectIsLoading,
    selectShowSuccessMessage,
    selectShowNewCostModal
}
