import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import EventClient from "../services/client/EventClient";

const initialState = {
    tasks: [],
    status: 'idle',
    error: null
  };

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        sortTasks: (state) => {
            state.tasks.sort((a,b)=>{
              if ( a.date > b.date  ){ return -1;}
              if ( a.date < b.date  ){ return  1;}
              return 0;
            });
            return state;
        },
        addNewTask: (state, action) => {
         state.tasks.push(action.payload);
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchTasks.pending, (state, action) => {
            state.status = 'loading...'
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

export const { sortTasks, addNewTask } = taskSlice.actions;

export default taskSlice.reducer;

export const selectAllTasks = state => state.task;

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
      const response = await EventClient.getEvents().then((response) => {
      //const response = await axios.get('https://whispering-oasis-16160.herokuapp.com/event').then((response) => {
        return response;
    });    
    const json = response.data.events;
    return json; 
});

