import { createAsyncThunk } from "@reduxjs/toolkit"
import API from "./Clients/ApiVolunteers";

export  const fetchVolunteers = createAsyncThunk('volunteers/fetchVolunteers', async () => {
    const response = await API.getVolunteers();
    const json = await response.json();
    console.log(json)
    return json;
  });

