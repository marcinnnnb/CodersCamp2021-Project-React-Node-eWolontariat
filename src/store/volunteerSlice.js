import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit';
import { fetchVolunteers } from "./fetchVolunteers";

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
          const volunteersActions = state.volunteers.map((volunteer, id)=>{
            let par = volunteer.actions;
            volunteer.numberActions= par.length;
            return volunteer;
          })
            state.volunteers.sort(compare);
            return state;
        },
        addNewVolunteer: (state, action) => {
         state.volunteers.push(action.payload);
        },
        selectVolunteers:(state, action) => {
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
            state.volunteers = action.payload;
          })
          .addCase(fetchVolunteers.rejected, (state, action) => {
            state.status = 'failed :('
            state.error = action.error.message
          })
      }
});

export const { sortVolunteers, addNewVolunteers, selectVolunteers, filterVolunteers } = volunteersSlice.actions;

export default volunteersSlice.reducer;

export const selectAllVolunteers = state => state.volunteers;

export const selectVolunteerId = (state, volunteerId) =>
  state.volunteers.find(volunteer => volunteer.id === volunteerId);

function compare( a, b ) {
  if ( a.numberActions > b.numberActions ){
      return -1;
  }
  if ( a.numberActions < b.numberActions ){
      return 1;
  }
    return 0;
}

