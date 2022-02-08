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
            state.volunteers.sort(compareDate);
            return state;
        },
        addNewVolunteer: (state, action) => {
         state.volunteers.push(action.payload);
         console.log(current(state));
         console.log(current(state.volunteers).length);
         
        },
        selectVolunteers:(state, action) => {
            return action.payload;
        },
        filterVolunteers: (state, action) => {
            return action.payload;
        },
        searchVolunteers: (state,action) => {
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


function compareDate( a, b ) {
    if ( a.date > b.date  ){
      return -1;
    }
    if ( a.date < b.date ){
      return 1;
    }
    return 0;
}  

