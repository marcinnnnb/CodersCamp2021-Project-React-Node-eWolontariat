import {configureStore} from "@reduxjs/toolkit";
import volunteerReducer from "./volunteerSlice";

export const store = configureStore({
    reducer:{
        volunteers: volunteerReducer,
    },
});