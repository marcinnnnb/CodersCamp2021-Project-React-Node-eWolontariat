import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'

const initialState = {
    organizations:[]
}


const organizationSlice = createSlice({
    name: 'organization',
    initialState,
    reducers: {
        addNewOrganization: (state, action) => {
         state.organizations.unshift(action.payload)
         console.log(current(state))
         console.log(current(state.organizations).length)
         
        }
    },

});

export const {addNewOrganization} = organizationSlice.actions;

export default organizationSlice.reducer;
