import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CategoryClient from "services/client/CategoryClient";

const initialState = {
    categories: [],
    status: 'idle',
    error: null
  };

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await CategoryClient.getAllCategories().then((response) => {
      return response;
  });    
  const json = response.data;
  return json;   
});

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
    //     loadCategories: (state, action) => {
    //         state = action.payload;
    //         state.status = action.payload.status;
    // }
  },
 
    extraReducers(builder) {
        builder
          .addCase(fetchCategories.pending, (state, action) => {
            state.status = 'loading...';
          })
          .addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'succeeded (:';
            state.categories = action.payload;
          })
          .addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed :('
            state.error = action.error.message
          })
         
      }
});


export const { loadCategories} = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const selectCategories = state => state.categories.categories;

export const selectCategoriesStatus = state => state.categories.status;

export const selectCategoriesError = state =>  state.categories.error;



