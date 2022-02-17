import { addNewTask, sortTasks } from '../taskSlice';
import {store} from '../store';

describe('taskSlice', () => {
    
    it('Should adds a new task', () => {
      let state = store.getState().task;
      const initialTaskList = state.tasks.length;
      store.dispatch(addNewTask({ title: 'Tester', amount: '1' }));
      state = store.getState().task;
      const newlyAddedTask = state.tasks.find((book) => book.title === 'Tester');

      expect(newlyAddedTask?.title).toBe('Tester');
      expect(newlyAddedTask?.amount).toBe('1');
      expect(state.tasks.length).toBeGreaterThan(initialTaskList);
  });

    it('Should sort tasks correctly', () => {
      const InitialStoreState = {
        tasks:[
          {name: "Jaynie", date: "2002-01-15T13:49:51.141Z"},
          {name: "Brian", date: "2008-01-15T13:49:51.141Z"},
          {name: "Eve", date: "2001-01-15T13:49:51.141Z"}
        ]
      };

      const sortedInitialState = InitialStoreState.tasks.sort((a,b)=>{
        if ( a.date > b.date  ){ return -1;}
        if ( a.date < b.date  ){ return  1;}
        return 0;
      });

      const expectedSort = {
        type: "tasks/sortTasks",
        payload: sortedInitialState
      };

      expect(sortTasks(undefined).payload).toEqual(undefined);
      expect(sortTasks(undefined).type).toEqual("tasks/sortTasks");

      expect(sortTasks(InitialStoreState.tasks)).toEqual(expectedSort);
    })
});