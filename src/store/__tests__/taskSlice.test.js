import reducer, { addNewTask } from '../taskSlice';
import Tasks from '../../reducers/reducers_tasks';
import {store} from '../store';

const initialState = {tasks:Tasks};

describe('taskSlice', () => {
    it('should return the initial state on first run', () => {
     
      const nextState = initialState;
      const result = reducer(undefined, {});
      expect(result).toEqual(nextState);
    });


     it('Adds a new task', () => {
    let state = store.getState().task;
    const initialTaskList = state.tasks.length;
  
    store.dispatch(addNewTask({ title: 'Tester', amount: '1' }));
    state = store.getState().task;
    const newlyAddedTask = state.tasks.find((book) => book.title === 'Tester');
    expect(newlyAddedTask?.title).toBe('Tester');
    expect(newlyAddedTask?.amount).toBe('1');
    expect(state.tasks.length).toBeGreaterThan(initialTaskList);
  })
});