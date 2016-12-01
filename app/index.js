import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import App from './displays/App';

// configure and create store
let store = configureStore();

// render App
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
