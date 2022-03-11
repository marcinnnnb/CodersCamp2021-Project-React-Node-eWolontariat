import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"
import volunteerReducer from "./volunteerSlice";
import dialogReducer from "../components/common/Dialog/store/dialogSlice";
import systemReducer from './systemSlice';
import organizationReducer from './organizationSlice'
//import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

//const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

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
    //composedEnhancer
});

