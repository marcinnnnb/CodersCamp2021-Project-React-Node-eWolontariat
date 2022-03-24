import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import UserClient from 'services/client/UserClient';

const initialState = {
  loggedIn: false,
  status: 'idle',
  user: undefined,
  error: null
};

export const fetchLoginData = createAsyncThunk('user/fetchLoginData ', async (data, { rejectWithValue }) => {
  const response = await UserClient.loginUser(data)
  .then((response) => {
    const token = response.headers["auth-token"];
    localStorage.setItem("auth-token", token); 
    return response;
  })
  .catch((error) => {
    return rejectWithValue(error);
  });
  
  return response; 
});

export const fetchRegistrationData = createAsyncThunk('user/fetchRegistrationData ', async (data, { rejectWithValue }) => {
  const response = await UserClient.registerUser(data).then((response) => {
    return response;
  })
  .catch((error) => {
    return rejectWithValue(error);
  });
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
      localStorage.clear();
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLoginData.pending, (state, action) => {
        state.status = 'loading...';
        state.error = null;
      })
      .addCase(fetchLoginData.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.status = 'succeeded log in (:';
          toast.success("Zalogowano!");
        }        
      })
      .addCase(fetchLoginData.rejected, (state, action) => {
        state.status = 'failed :('
        state.error = action.error.message;
        toast.error("Logowanie nie powiodło się")
      })
      .addCase(fetchRegistrationData.pending, (state, action) => {
        state.status = 'loading...';
      })
      .addCase(fetchRegistrationData.fulfilled, (state, action) => {
        if (action.payload.status === 201) {
          state.status = 'succeeded register (:';
          toast.success("Zarejestrowałeś się!");
        }        
      })
      .addCase(fetchRegistrationData.rejected, (state, action) => {
        state.status = 'failed register :('
        state.error = action.error.message;
        toast.error("Rejestracja nie powiodło się");
      })
  }
});

export const {  login, logout } = systemSlice.actions;

export default systemSlice.reducer;

export const selectIsLoggedIn = state => state.system.loggedIn;

export const selectResponseStatus = state => state.system.status;

export const selectResponseError = state =>  state.system.error;

export const selectLoggedInUser = state =>  state.system.user;

