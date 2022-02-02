import {configureStore} from "@reduxjs/toolkit";
import taskReducer from '../components/Tasks/taskSlice'

export const store = configureStore({
    reducer: {
        task:taskReducer,
    }
});


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;