import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EventClient from "services/client/EventClient";

const initialState = {
    searchedData: [],
    status: 'idle',
    error: null
  };

export const fetchSearchedTasks = createAsyncThunk('searchedData/fetchSearchedTasks', async (params) => {
    const response = await EventClient.getEvents(params).then((response) => {
      return response;
      });   
  
  const json = response.data.events;
  return json; 
});

const searchSlice = createSlice({
    name: 'searchedData',
    initialState,
    reducers: {
        filterList: (state, action) => {
            state.status = 'idle';
          }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchSearchedTasks.pending, (state, action) => {
            state.status = 'loading...';
          })
          .addCase(fetchSearchedTasks.fulfilled, (state, action) => {
            state.status = 'succeeded (:';
            state.searchedData = action.payload;
          })
          .addCase(fetchSearchedTasks.rejected, (state, action) => {
            state.status = 'failed :('
            state.error = action.error.message
          })
      }
});

export default searchSlice.reducer;

export const { filterList } = searchSlice.actions;

export const selectSearchedData = state => state.searchedData.searchedData;

export const selectSearchedDataStatus = state => state.searchedData.status;

export const selectSearchedDataError = state =>  state.searchedData.error;

