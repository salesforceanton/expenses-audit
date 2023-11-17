import { mainSlice } from "./main-slice";
import { HTTP_METHOD, DEFAULT_HEADERS, costsEndpoint } from "./constants";

const mainStateGenericActions = mainSlice.actions;

const makeHttpRequest = ({ endpoint, method, headers, body }, successCallback) => async(dispatch) => {
    dispatch(mainStateGenericActions.setError(null));
    dispatch(mainStateGenericActions.setIsLoading(true));

    try {
        const response = await fetch(endpoint, {
            method: method ?? HTTP_METHOD.GET,
            headers: headers ?? DEFAULT_HEADERS,
            body: body ? JSON.stringify(body) : null
        });

        const responseData = await response.json();
        successCallback(responseData);
        } catch (error) {
            dispatch(mainStateGenericActions.setError(error));
        } finally {
            dispatch(mainStateGenericActions.setIsLoading(false));
        }
}

const addCostThunk = (costInput) => async(dispatch) => {
    const handleCreateCostSuccess = (input) => (response) => {
        dispatch(mainStateGenericActions.addCost({ ...input, id: response.name }));
        dispatch(mainStateGenericActions.setShowSuccessMessage(true));

        window.setTimeout(() => {
            dispatch(mainStateGenericActions.setShowSuccessMessage(false));
        }, 3000)
    };
    dispatch(makeHttpRequest( 
        { endpoint: costsEndpoint, method: HTTP_METHOD.POST, body: costInput },
        handleCreateCostSuccess(costInput)
    ));
}

const getCostsThunk = () => async(dispatch) => {
    const handleGetCostsSuccess = (response) => {
        dispatch(mainStateGenericActions.setCostsData(response));
    };
    dispatch(makeHttpRequest( {endpoint: costsEndpoint }, handleGetCostsSuccess));
}

export const mainStateActions = {
    ...mainStateGenericActions,
    addCost: addCostThunk,
    getCosts: getCostsThunk
}