import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    volunteers:[]
};

export const volunteerSlice = createSlice({
    name: "volunteer",
    initialState,
    reducers: {
        addNewVolunteer: (state, action) => {
            state.volunteers.push(action.payload)
        },
        removeVolunteer: (state, action) => {
            state.volunteers.splice(action.payload, 1);
        },
    },

});

export const {addNewVolunteer} = volunteerSlice.actions;

export default volunteerSlice.reducer;