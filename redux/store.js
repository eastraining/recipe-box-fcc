import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

let configureStore = (initialState = {
  current: '',
  recipes: []
}) => {
  console.log('Configure Store Called');
  console.log(initialState);
  return finalCreateStore(reducer, initialState);
}

export default configureStore;