import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const rtkQueryErrorLogger = (api) => (next) => (action) => {

  if (isRejectedWithValue(action)){
    toast.warn(action.payload.response.data);
  } else if (action.payload && action.payload.status===400){
    toast.error("Błąd sieci. Sprawdź swoje połączenie!");
  } else if (action.error){
    toast.error(action.error.message);
  }

  return next(action);
}