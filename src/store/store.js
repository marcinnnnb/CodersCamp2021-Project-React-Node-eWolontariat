import {configureStore} from "@reduxjs/toolkit";
import taskReducer from '../components/Tasks/taskSlice'

export const store = configureStore({
    reducer: {
        task:taskReducer,
    }
});


