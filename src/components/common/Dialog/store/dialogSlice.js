import { createSlice } from '@reduxjs/toolkit';

export const FormType = Object.freeze({
  rejestracja: 'rejestracja',
  zalozonyProfil: 'zalozonyProfil',
  loginDialog: 'loginDialog',
  rejestracjaEmail: 'rejestracjaEmail',
});

const initialState = {
  isOpen: false,
  formType: undefined,
};

const slice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state, action) => {
      return { ...action.payload, isOpen: true };
    },
    closeDialog: (state) => {
      state.isOpen = false;
      state.formType = undefined;
    },
  },
});

export const { openDialog, closeDialog } = slice.actions;

export default slice.reducer;
