import { isRejectedWithValue } from '@reduxjs/toolkit'

export const rtkQueryErrorLogger = (api) => (next) => (action) => {

  if (isRejectedWithValue(action)){
    console.warn(action.payload.message);
  }
  else if (action.error){
    console.error(action.error.message)
  }
  //add status

  return next(action);
}