import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EventClient from "services/client/EventClient";

const initialState = {
    task: {},
    status: 'idle',
    error: null
  };


export const fetchTask = createAsyncThunk('task/fetchTask', async (id) => {
    const response = await EventClient.getEventById(id).then((response) => {
    return response;
    });    
    const json = response.data;
    return json; 
});

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
      loadTask: (state, action) => {
        state.status = action.payload.status;
        state.task = {}
      }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchTask.pending, (state, action) => {
            state.status = 'loading...';
          })
          .addCase(fetchTask.fulfilled, (state, action) => {
            state.status = 'succeeded (:';
            state.task = action.payload;
          })
          .addCase(fetchTask.rejected, (state, action) => {
            state.status = 'failed :('
            state.error = action.error.message
          })
      }
});

export const {loadTask} = taskSlice.actions;

export default taskSlice.reducer;

export const selectTask = state => state.task.task;

export const selectTaskStatus = state => state.task.status;

export const selectTaskError = state =>  state.task.error;

