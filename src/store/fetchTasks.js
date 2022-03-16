import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from "./Clients/ApiTasks";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await Api.getEvents();
    const json = await response.json();
    return json.events;
  });
