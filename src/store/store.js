import {configureStore} from "@reduxjs/toolkit";
import volunteerReducer from "./volunteerSlice";
import dialogReducer from "../components/common/Dialog/store/dialogSlice";
import systemReducer from './systemSlice';

export const store = configureStore({
    reducer:{
        volunteers: volunteerReducer,
        dialog: dialogReducer,
        system: systemReducer,
    },
});