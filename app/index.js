import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import App from './displays/App';

// default recipe list
const defaultRecipes = [
  {
    id: 'Singapore Fried Noodles',
    ingredients: 'Egg Noodles, Eggs, Shrimp, Green Bean Sprouts, Soy Sauce',
  },
  {
    id: 'Bak Kut Teh',
    ingredients: 'Pork Ribs, White Pepper, Garlic, Chinese Herbs, Fried Doughsticks',
  },
  {
    id: 'Beef Bourguignon',
    ingredients: 'Beef, Red Wine, Beef Broth, Garlic, Onions, Mushrooms',
  }
];

// configure and create store
let initialState = {
  current: {
    id: 'Singapore Fried Noodles',
    ingredients: 'Egg Noodles, Eggs, Shrimp, Green Bean Sprouts, Soy Sauce',
  },
  recipes: defaultRecipes
}
let store = configureStore(initialState);

// render App
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
