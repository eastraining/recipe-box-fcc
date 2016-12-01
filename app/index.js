import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import App from './displays/App';

// default recipe list
const defaultRecipes = [
  {
    id: 'New Recipe',
    ingredients: 'Add a new recipe',
    current: true,
    edit: true
  },
  {
    id: 'Singapore Fried Noodles',
    ingredients: 'Egg Noodles, Eggs, Shrimp, Green Bean Sprouts, Soy Sauce',
    current: false,
    edit: false
  },
  {
    id: 'Bak Kut Teh',
    ingredients: 'Pork Ribs, White Pepper, Garlic, Chinese Herbs, Fried Doughsticks',
    current: false,
    edit: false
  },
  {
    id: 'Beef Bourguignon',
    ingredients: 'Beef, Red Wine, Beef Broth, Garlic, Onions, Mushrooms',
    current: false,
    edit: false
  }
];

// configure and create store
let initialState = {
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
