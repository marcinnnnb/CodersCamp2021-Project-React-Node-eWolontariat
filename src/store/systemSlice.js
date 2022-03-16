import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  name: undefined,
  userId: undefined
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.name = action.payload.name;
      state.userId = action.payload.userId;
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