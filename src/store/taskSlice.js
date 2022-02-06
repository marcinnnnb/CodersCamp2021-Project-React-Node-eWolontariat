import { createSlice } from "@reduxjs/toolkit";
import Tasks from '../reducers/reducers_tasks';
import { current } from '@reduxjs/toolkit'

const initialState = {
    tasks:Tasks
};
console.log(initialState);

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addNewTask: (state, action) => {
         state.tasks.unshift(action.payload)         
        }
    },

});

export const {addNewTask} = taskSlice.actions;

export default taskSlice.reducer;
