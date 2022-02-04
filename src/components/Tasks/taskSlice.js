import { createSlice } from "@reduxjs/toolkit";
import Tasks from '../../reducers/reducers_tasks';
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
         state.tasks.push(action.payload)
         console.log(current(state))
         console.log(current(state.tasks).length)
         
        },
        selectTask:(state, action) => {
            return action.payload
        }
    },

});

export const {addNewTask, selectTask} = taskSlice.actions;

export default taskSlice.reducer;
