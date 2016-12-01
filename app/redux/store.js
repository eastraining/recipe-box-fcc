import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

// default recipe list
const defaultRecipes = [
  {
    id: 'Add a new recipe',
    ingredients: '',
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

let configureStore = (initialState = {
  recipes: defaultRecipes
}) => {
  return finalCreateStore(reducer, initialState);
}

export default configureStore;