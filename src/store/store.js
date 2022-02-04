import {configureStore} from "@reduxjs/toolkit";
import taskReducer from '../components/Tasks/taskSlice'
import volunteerReducer from "./volunteerSlice";

export const store = configureStore({
    reducer:{
        volunteers: volunteerReducer,
        task: taskReducer,
    }
});



