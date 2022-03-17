import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import VolunteerClient from "../services/client/VolunteerClient";

const initialState = {
    volunteers: [],
    status: 'idle',
    error: null
  };

const volunteersSlice = createSlice({
    name: 'volunteers',
    initialState,
    reducers: {
        sortVolunteers: (state,action) => {
          if(state.volunteers){
            state.volunteers.map((volunteer, id)=>{
              let par = volunteer.events;
              volunteer.numberActions= par.length;
              return volunteer;
              })
              state.volunteers.sort(compare);
          } else return null;
            return state;
        },
        addNewVolunteer: (state, action) => {
            state.volunteers.push(action.payload);
        },
        selectVolunteers: (state, action) => {
            return action.payload;
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchVolunteers.pending, (state, action) => {
            state.status = 'loading...'
          })
          .addCase(fetchVolunteers.fulfilled, (state, action) => {
            state.status = 'succeeded (:'
            state.volunteers = Array.isArray ? action.payload : [];
          })
          .addCase(fetchVolunteers.rejected, (state, action) => {
            state.status = 'failed :('
            state.error = action.error.message
          })
      }
});

export const { sortVolunteers, addNewVolunteer, selectVolunteers, filterVolunteers } = volunteersSlice.actions;

export default volunteersSlice.reducer;

export const selectAllVolunteers = state => state.volunteers;

export const selectVolunteerId = (state, volunteerId) =>
  state.find(volunteer => volunteer.id === volunteerId);

export const fetchVolunteers = createAsyncThunk('volunteers/fetchVolunteers', async () => {
    //const response = await axios.get('https://whispering-oasis-16160.herokuapp.com/volunteer').then((response) => {
    const response = await VolunteerClient.getVolunteers().then((response) => {
      return response;
    });    
    const json = response.data;
    return json;
});





  
function compare( a, b ) {
  if ( a.numberActions > b.numberActions ){
      return -1;
  }
  if ( a.numberActions < b.numberActions ){
      return 1;
  }
    return 0;
}

