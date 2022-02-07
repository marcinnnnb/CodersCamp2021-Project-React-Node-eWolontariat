import { createAsyncThunk } from "@reduxjs/toolkit"
import API from "./ApiVolunteers";

export  const fetchVolunteers = createAsyncThunk('volunteers/fetchVolunteers', async () => {
    const response = await API.getData();
    const json = await response.json();
    console.log(json);
    return json;
  });

