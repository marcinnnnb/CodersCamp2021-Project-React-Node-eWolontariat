import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'components/App/App';
import { Provider } from 'react-redux';
import {store} from 'store/store';
import {BrowserRouter} from 'react-router-dom';
import { fetchTasks } from 'store/tasksListSlice';
import { fetchVolunteers } from 'store/volunteerSlice';
import { fetchOrganizations } from 'store/organizationSlice';
import { fetchCategories } from 'store/categorySlice';
import ScrollToTop from 'ScrollToTop '

store.dispatch(fetchTasks());
store.dispatch(fetchVolunteers());
store.dispatch(fetchOrganizations());
store.dispatch(fetchCategories());

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <BrowserRouter>
        <ScrollToTop/>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);