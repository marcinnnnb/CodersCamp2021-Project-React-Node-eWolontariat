import { createAsyncThunk } from "@reduxjs/toolkit"
import Api from "../HomePage/Sections/SectionNewTasks/ApiTasks";

const fetchTasks = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
      const response = await Api.fetchById(userId)
      return response.json
    }
  );

  export default fetchTasks;