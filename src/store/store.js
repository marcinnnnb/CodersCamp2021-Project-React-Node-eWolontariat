import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "store/taskSlice";
import tasksListReducer from "store/tasksListSlice";
import volunteerReducer from "store/volunteerSlice";
import dialogReducer from "components/common/Dialog/store/dialogSlice";
import systemReducer from 'store/systemSlice';
import pictureReducer from 'store/pictureSlice'
import organizationReducer from 'store/organizationSlice';
import searchReducer from 'store/searchSlice';
import categoriesReducer from 'store/categorySlice'
import { rtkQueryErrorLogger } from 'store/ErrorCatchingMiddleware';

export const store = configureStore({
    reducer:{
        volunteers: volunteerReducer,
        dialog: dialogReducer,
        system: systemReducer,
        task: taskReducer,
        tasksList: tasksListReducer,
        organization: organizationReducer,
        picture: pictureReducer,
        searchedData: searchReducer,
        categories: categoriesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }).concat([rtkQueryErrorLogger])
});

