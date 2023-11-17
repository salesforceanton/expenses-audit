import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./main/main-slice";

export default configureStore({
    reducer: {
        main: mainSlice.reducer 
    }
});