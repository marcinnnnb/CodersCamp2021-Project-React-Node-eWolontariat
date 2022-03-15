import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  name: undefined
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.name = action.payload.name;
      console.log(state.loggedIn)
    },
    logout: (state) => {
      state.loggedIn = false;
      state.name = undefined;
    }
  },
});

export const { login, logout } = systemSlice.actions;

export const selectLoggedIn = state => state;

export default systemSlice.reducer;