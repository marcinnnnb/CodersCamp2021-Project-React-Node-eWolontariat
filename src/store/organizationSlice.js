import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import OrganizationClient from "../services/client/OrganizationClient";

const initialState = {
    organizations: [],
    status: 'idle',
    error: null
  };

export const fetchOrganizations = createAsyncThunk('organizations/fetchOrganizations', async () => {
    const response = await OrganizationClient.getOrganizations().then((response) => {
      return response;
    });    
    const json = response.data;
    return json;
});

const organizationSlice = createSlice({
    name: 'organizations',
    initialState,
    reducers: {
        sortOrganizations: (state) => {
            state.organizations.sort((a,b)=>{
              if ( a.date > b.date  ){ return -1;}
              if ( a.date < b.date  ){ return  1;}
              return 0;
            });
            return state;
        },
        addNewOrganization: (state, action) => {
            state.organizations.push(action.payload);
        },
        selectOrganizations:(state, action) => {
            return action.payload;
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchOrganizations.pending, (state, action) => {
            state.status = 'loading...'
          })
          .addCase(fetchOrganizations.fulfilled, (state, action) => {
            state.status = 'succeeded (:'
            state.organizations = Array.isArray ? action.payload : [];
          })
          .addCase(fetchOrganizations.rejected, (state, action) => {
            state.status = 'failed :('
            state.error = action.error.message
          })
      }
});

export const { sortOrganizations, addNewOrganization, selectOrganizations } = organizationSlice.actions;

export default organizationSlice.reducer;

export const selectAllOrganizations = state => state.organization;

export const selectOrganizationId = (state, organizationId) =>
  state.find(organization => organization.id === organizationId);