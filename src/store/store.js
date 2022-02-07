import {configureStore} from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"
import volunteerReducer from "./volunteerSlice";
//import organizationReducer from './organizationSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({
    middleware: getDefaultMiddleware({
        serializableCheck: false
      }),
    reducer:{
        volunteers: volunteerReducer,
        task: taskReducer,
        //organization: organizationReducer,
    }
});



