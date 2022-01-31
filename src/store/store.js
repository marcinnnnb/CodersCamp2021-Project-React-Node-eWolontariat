import {configureStore} from "@reduxjs/toolkit";
import allReducers  from "../reducers/CombineReducer";

export const store = configureStore({
    reducer: allReducers
});