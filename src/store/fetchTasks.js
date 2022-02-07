import { createAsyncThunk } from "@reduxjs/toolkit"
import API from "./ApiTasks";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await API.getData();
    const json = await response.json();
    console.log(json);
    return json;
  });


