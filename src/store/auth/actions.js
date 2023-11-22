import { authSlice } from "./auth-slice";
import { authEndpoint, localStorageAuthState } from "./constants";
import { rootStateActions, HTTP_METHOD } from "../root/public-api";

const authStateGenericActions = authSlice.actions;

const checkIsLoggedInThunk = (navigationCallback) => async(dispatch) => {
    const isLoggedIn = localStorage.getItem(localStorageAuthState);
    if (isLoggedIn) {
        dispatch(authStateGenericActions.logIn());
    } else {
        navigationCallback && navigationCallback();
    }
}

const logInThunk = (successCallback) => async(dispatch) => {
    dispatch(rootStateActions.makeHttpRequest({ endpoint: authEndpoint }, successCallback));
}

const signUpThunk = ({ successCallback, userData }) => async(dispatch) => {
    dispatch(rootStateActions.makeHttpRequest(
        {
            endpoint: authEndpoint,
            method: HTTP_METHOD.POST,
            body: userData 
        },
         successCallback
        )
    );
}

export const authStateActions = {
    ...authStateGenericActions,
    checkIsLoggedIn: checkIsLoggedInThunk,
    processUserLogin: logInThunk,
    signUp: signUpThunk
}