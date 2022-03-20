import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import UserClient from 'services/client/UserClient';

const initialState = {
  loggedIn: false,
  status: 'idle',
  user: undefined,
  error: null
};

export const fetchLoginData = createAsyncThunk('user/fetchLoginData ', async (data) => {
  const response = await UserClient.loginUser(data).then((response) => {
    return response;
  })
  const token = response.headers["auth-token"];
  localStorage.setItem("auth-token", token); 
  return response; 
  });

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = undefined;
      state.status = 'logout';
      toast.success("Wylogowano!");
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLoginData.pending, (state, action) => {
        state.status = 'loading...';
      })
      .addCase(fetchLoginData.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          toast.success("Zalogowano!");
          state.status = 'succeeded (:';
        }        
      })
      .addCase(fetchLoginData.rejected, (state, action) => {
        state.status = 'failed :('
        state.error = action.error.message;
        toast.error("Logowanie nie powiodło się")
      })
  }
});

export const {  login, logout } = systemSlice.actions;

export default systemSlice.reducer;

export const selectIsLoggedIn = state => state.system.loggedIn;

export const selectResponseStatus = state => state.system.status;

export const selectResponseError = state =>  state.system.error;

export const selectLoggedInUser = state =>  state.system.user;

