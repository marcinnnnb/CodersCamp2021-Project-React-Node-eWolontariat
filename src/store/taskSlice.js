import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./fetchTasks";

const initialState = {
    tasks: [],
    status: 'idle',
    error: null
  };

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        sortTasks: (state,action) => {
            state.tasks.sort(compareDate);
            return state;
        },
        addNewTask: (state, action) => {
         state.tasks.push(action.payload);
        },
        selectTasks:(state, action) => {
            return action.payload;
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchTasks.pending, (state, action) => {
            state.status = 'loading...'
          })
          .addCase(fetchTasks.fulfilled, (state, action) => {
            state.status = 'succeeded (:'
            state.tasks = action.payload;
          })
          .addCase(fetchTasks.rejected, (state, action) => {
            state.status = 'failed :('
            state.error = action.error.message
          })
      }
});

export const { sortTasks, addNewTask, selectTasks } = taskSlice.actions;

export default taskSlice.reducer;

export const selectAllTasks = state => state.task;

export const selectTasksId = (state, taskId) =>
  state.find(task => task.id === taskId);

export const selectTasksTitle = (state, title) =>
  state.find(task => task.title === title);

export const selectTasksCategory = (state, category) =>
  state.filter(task => task.categories.includes(category));

function compareDate( a, b ) {
    if ( a.date > b.date  ){
      return -1;
    }
    if ( a.date < b.date ){
      return 1;
    }
    return 0;
}  

