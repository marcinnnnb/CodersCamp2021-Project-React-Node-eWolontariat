import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PictureClient from "services/client/PictureClient";

const initialState = {
    picture: null,
    status: '',
    pictureId: '',
    error: null
  };

export const fetchPicture = createAsyncThunk('picture/fetchPicture', async (pictureId) => {
    const response = await PictureClient.getPictureById(pictureId).then((response) => {
      return response;
  });    
  const dataImage = response.data;
  return dataImage; 
});

const pictureSlice = createSlice({
    name: 'picture',
    initialState,
    reducers: {
          loadPicture: (state, action) => {
            state.pictureId = action.payload.pictureId;
            state.status = action.payload.status;
          }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchPicture.pending, (state, action) => {
            state.status = 'loading...';
          })
          .addCase(fetchPicture.fulfilled, (state, action) => {
            state.status = 'succeeded (:';
            state.picture = action.payload;
          })
          .addCase(fetchPicture.rejected, (state, action) => {
            state.status = 'failed :('
            state.error = action.error.message
          })
      }
});

export default pictureSlice.reducer;

export const { loadPicture} = pictureSlice.actions;

export const selectPicture = state => state.picture.picture;

export const selectPictureId = state => state.picture.pictureId;

export const selectPictureStatus = state => state.picture.status;

export const selectTaskError = state =>  state.picture.error;

