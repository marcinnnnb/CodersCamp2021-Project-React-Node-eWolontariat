import  { addNewTask } from '../taskSlice';
import {store} from '../store';


describe('taskSlice', () => {
  
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