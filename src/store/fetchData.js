import { createAsyncThunk } from "@reduxjs/toolkit"
import API from "../components/HomePage/Sections/SectionNewTasks/ApiTasks";

const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await API.getData
    return response.json
  });

export default fetchData;

