import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const rtkQueryErrorLogger = (api) => (next) => (action) => {

  if (isRejectedWithValue(action)){
    toast.warn(action.payload.message);
  }
  else if (action.error){
    toast.error(action.error.message);
  }

  return next(action);
}