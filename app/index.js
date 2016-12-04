import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import App from './displays/App';
import { loadState, saveState } from './localStorage'

// configure and create store
let store = configureStore();

// store.subscribe(() => {
//   saveState(store.getState());
// });

// render App
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
