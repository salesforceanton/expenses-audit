import { rootSlice } from "./root-slice";
import { HTTP_METHOD, DEFAULT_HEADERS } from "./constants";

const rootStateGenericActions = rootSlice.actions;

const makeHttpRequest = ({ endpoint, method, headers, body }, successCallback, errorCallback) => async(dispatch) => {
    dispatch(rootStateGenericActions.setError(null));
    dispatch(rootStateGenericActions.setIsLoading(true));

    try {
        const response = await fetch(endpoint, {
            method: method ?? HTTP_METHOD.GET,
            headers: headers ?? DEFAULT_HEADERS,
            body: body ? JSON.stringify(body) : null
        });

        const responseData = await response.json();
        successCallback(responseData);
        } catch (error) {
            dispatch(rootStateGenericActions.setError(error));
            errorCallback && errorCallback(error);
        } finally {
            dispatch(rootStateGenericActions.setIsLoading(false));
        }
}

export const rootStateActions = {
    ...rootStateGenericActions,
    makeHttpRequest
}