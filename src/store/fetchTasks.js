import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from "./ApiTasks";

export const fetchTasks = createAsyncThunk('tasks/tasks', async () => {
    const response = await Api.getData();
    const json = await response.json();
    console.log(json);
    return json;
  });
