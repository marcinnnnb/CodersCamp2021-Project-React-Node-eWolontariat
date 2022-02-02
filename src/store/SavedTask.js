import {ADD_TASK} from '../actions/ADD_TASK';
import TaskReducer from '../reducers/reducers_tasks';
const initialTaskState= TaskReducer();

export default function savedTask(state=initialTaskState, action) {
    console.log(TaskReducer)
    switch (action.type)

    {
        case ADD_TASK:
            return { 
                ...state,
                TaskReducer: [...state.TaskReducer, action.newItem]
                
            }
            console.log(TaskReducer)
            default:
                return state
        // case "TASK_SELECTED"
        // return{
        //     action.payload
        // }
    }
};

