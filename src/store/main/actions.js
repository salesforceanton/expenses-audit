import { mainSlice } from "./main-slice";
import { costsEndpoint } from "./constants";
import { rootStateActions, HTTP_METHOD } from "../root/public-api";

const mainStateGenericActions = mainSlice.actions;


const addCostThunk = (costInput) => async(dispatch) => {
    const handleCreateCostSuccess = (input) => (response) => {
        dispatch(mainStateGenericActions.addCost({ ...input, id: response.name }));
        dispatch(mainStateGenericActions.setShowSuccessMessage(true));

        window.setTimeout(() => {
            dispatch(mainStateGenericActions.setShowSuccessMessage(false));
        }, 3000)
    };
    dispatch(rootStateActions.makeHttpRequest( 
        { endpoint: costsEndpoint, method: HTTP_METHOD.POST, body: costInput },
        handleCreateCostSuccess(costInput)
    ));
}

const getCostsThunk = () => async(dispatch) => {
    const handleGetCostsSuccess = (response) => {
        dispatch(mainStateGenericActions.setCostsData(response));
    };
    dispatch(rootStateActions.makeHttpRequest( {endpoint: costsEndpoint }, handleGetCostsSuccess));
}

export const mainStateActions = {
    ...mainStateGenericActions,
    addCost: addCostThunk,
    getCosts: getCostsThunk
}