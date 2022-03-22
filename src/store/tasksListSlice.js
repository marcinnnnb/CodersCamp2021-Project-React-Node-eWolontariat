import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EventClient from "services/client/EventClient";

const initialState = {
    tasks: [],
    status: 'idle',
    error: null
  };

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await EventClient.getEvents().then((response) => {
      return response;
  });    
  const json = response.data.events;
  return json; 
});

export const fetchTasksBySearch = createAsyncThunk('tasks/fetchTasksBySearch', async () => {
    const response = await EventClient.getEvents().then((response) => {
      return response;
  });    
  const json = response.data.events;
  return json; 
});

export const fetchTasksByCategory = createAsyncThunk('tasks/fetchTasksByCategory', async () => {
    const response = await EventClient.getEvents().then((response) => {
      return response;
  });    
  const json = response.data.events;
  return json; 
});

const tasksListSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addNewTask: (state, action) => {
         state.tasks.push(action.payload);
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchTasks.pending, (state, action) => {
            state.status = 'loading...';
          })
          .addCase(fetchTasks.fulfilled, (state, action) => {
            state.status = 'succeeded (:';
            state.tasks = action.payload;
          })
          .addCase(fetchTasks.rejected, (state, action) => {
            state.status = 'failed :('
            state.error = action.error.message
          })
          .addCase(fetchTasksBySearch.pending, (state, action) => {
            state.status = 'loading...';
          })
          .addCase(fetchTasksBySearch.fulfilled, (state, action) => {
            state.status = 'succeeded (:';
            state.tasks = action.payload;
          })
          .addCase(fetchTasksBySearch.rejected, (state, action) => {
            state.status = 'failed :('
            state.error = action.error.message
          })
          .addCase(fetchTasksByCategory.pending, (state, action) => {
            state.status = 'loading...';
          })
          .addCase(fetchTasksByCategory.fulfilled, (state, action) => {
            state.status = 'succeeded (:';
            state.tasks = action.payload;
          })
          .addCase(fetchTasksByCategory.rejected, (state, action) => {
            state.status = 'failed :('
            state.error = action.error.message
          })
      }
});

export const { addNewTasks } = tasksListSlice.actions;

export default tasksListSlice.reducer;

export const selectTasksList = state => state.tasksList.tasks;

export const selectTasksListStatus = state => state.tasksList.status;

export const selectTasksListError = state =>  state.tasksList.error;

