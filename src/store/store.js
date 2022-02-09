import {configureStore} from "@reduxjs/toolkit";
import taskReducer from './taskSlice'
import volunteerReducer from "./volunteerSlice";
import dialogReducer from "../components/common/Dialog/store/dialogSlice";
import systemReducer from './systemSlice';
import organizationReducer from './organizationSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit';


export const store = configureStore({
    middleware: getDefaultMiddleware({
        serializableCheck: false
      }),
    reducer:{
        volunteers: volunteerReducer,
        dialog: dialogReducer,
        system: systemReducer,
        task: taskReducer,
        organization: organizationReducer,
    },
});

