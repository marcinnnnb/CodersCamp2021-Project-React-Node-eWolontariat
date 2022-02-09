import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: false,
  name: undefined
};

const slice = createSlice({
  name: "system",
  initialState,
  reducers: {
    login: (state, action) => {
      state.login = true;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.login = false;
      state.name = undefined;
    }
  },
});

export const { login, logout } = slice.actions;

export default slice.reducer;