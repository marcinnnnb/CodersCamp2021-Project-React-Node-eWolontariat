import {applyMiddleware, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"
import volunteerReducer from "./volunteerSlice";
import thunkMiddleware from 'redux-thunk';
//import organizationReducer from './organizationSlice'
//import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

//const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = configureStore({
    middleware: getDefaultMiddleware({
        serializableCheck: false
      }),
    reducer:{
        volunteers: volunteerReducer,
        task: taskReducer,
        //organization: organizationReducer,
    },
    //composedEnhancer
});



