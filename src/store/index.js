import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./main/main-slice";
import { rootSlice } from "./root/root-slice";
import { authSlice } from "./auth/auth-slice";

export default configureStore({
    reducer: {
        main: mainSlice.reducer ,
        root: rootSlice.reducer,
        auth: authSlice.reducer
    }
});