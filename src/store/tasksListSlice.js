import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EventClient from "services/client/EventClient";

const initialState = {
    tasks: [],
    status: 'idle',
    error: null
  };

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (params) => {
    const response = await EventClient.getEvents(params).then((response) => {
      return response;
      });   
  
  const json = response.data.events;
  return json; 
});

const tasksListSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        filterTasksList: (state, action) => {
          state.status = 'idle';
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
      }
});

export const { filterTasksList } = tasksListSlice.actions;

export default tasksListSlice.reducer;

export const selectTasksList = state => state.tasksList.tasks;

export const selectTasksListStatus = state => state.tasksList.status;

export const selectTasksListError = state =>  state.tasksList.error;

