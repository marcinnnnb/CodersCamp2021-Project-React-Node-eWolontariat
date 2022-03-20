import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"
import volunteerReducer from "./volunteerSlice";
import dialogReducer from "../components/common/Dialog/store/dialogSlice";
import systemReducer from './systemSlice';
import organizationReducer from './organizationSlice';
import { rtkQueryErrorLogger } from './ErrorCatchingMiddleware';

export const store = configureStore({
    reducer:{
        volunteers: volunteerReducer,
        dialog: dialogReducer,
        system: systemReducer,
        task: taskReducer,
        organization: organizationReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }).concat([rtkQueryErrorLogger])
});

