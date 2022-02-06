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
         console.log(current(state))
         console.log(current(state.tasks).length)
         
        }
    },

});

export const {addNewTask, selectTask} = taskSlice.actions;

export default taskSlice.reducer;
