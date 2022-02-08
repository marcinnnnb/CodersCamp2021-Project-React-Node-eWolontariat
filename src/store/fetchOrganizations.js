import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from "./ApiOrganizations";

export const fetchOrganizations = createAsyncThunk('organizations/fetchOrganizations', async () => {
    const response = await Api.getData();
    const json = await response.json();
    return json;
  });
