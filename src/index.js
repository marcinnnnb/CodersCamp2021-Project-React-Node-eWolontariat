import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import {store} from './store/store';
import {BrowserRouter} from 'react-router-dom';
import { fetchTasks } from './store/fetchTasks';
import { fetchVolunteers } from './store/fetchVolunteers';
import { fetchOrganizations } from './store/fetchOrganizations';

store.dispatch(fetchTasks());
store.dispatch(fetchVolunteers());
store.dispatch(fetchOrganizations());

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);