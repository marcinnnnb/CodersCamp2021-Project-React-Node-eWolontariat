<<<<<<< HEAD
import {applyMiddleware, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
=======
import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
>>>>>>> 2cf3b94e7946bb4baa4e7282202b1250ad1cc0c6
import taskReducer from "./taskSlice"
import volunteerReducer from "./volunteerSlice";
import dialogReducer from "../components/common/Dialog/store/dialogSlice";
import systemReducer from './systemSlice';
<<<<<<< HEAD
//import organizationReducer from './organizationSlice'
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
=======
import organizationReducer from './organizationSlice'
//import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
>>>>>>> 2cf3b94e7946bb4baa4e7282202b1250ad1cc0c6

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = configureStore({
    middleware: getDefaultMiddleware({
        serializableCheck: false
      }),
    reducer:{
        volunteers: volunteerReducer,
        dialog: dialogReducer,
        system: systemReducer,
        task: taskReducer,
<<<<<<< HEAD
        //organization: organizationReducer,
    }
    // composedEnhancer
=======
        organization: organizationReducer,
    },
    //composedEnhancer
>>>>>>> 2cf3b94e7946bb4baa4e7282202b1250ad1cc0c6
});

