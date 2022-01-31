import {combineReducers} from 'redux';
import TaskReducer from './reducers_tasks';

const allReducers= combineReducers({
    tasks: TaskReducer,
    // volounteers: ValounteerReducer,
    // organizations: OrganizationReducer
})

export default allReducers;
