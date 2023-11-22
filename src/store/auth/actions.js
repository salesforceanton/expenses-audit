import { useNavigate } from 'react-router-dom';

import { authSlice } from "./auth-slice";
import { authEndpoint } from "./constants";
import { rootStateActions, HTTP_METHOD } from "../root/public-api";

const authStateGenericActions = authSlice.actions;

const checkIsLoggedInThunk = (navigateCallback) => async(dispatch) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
        dispatch(authStateGenericActions.logIn());
    } else {
        navigateCallback && navigateCallback();
    }
}

// const getCostsThunk = () => async(dispatch) => {
//     const handleGetCostsSuccess = (response) => {
//         dispatch(mainStateGenericActions.setCostsData(response));
//     };
//     dispatch(rootStateActions.makeHttpRequest( {endpoint: costsEndpoint }, handleGetCostsSuccess));
// }

export const authStateActions = {
    ...authStateGenericActions,
    checkIsLoggedIn: checkIsLoggedInThunk,
}