import { combineReducers } from 'redux';
import animal from './animal';
import breed from './breed';
import location from './location';
import theme from './theme';

export default combineReducers({
  location,
  breed,
  animal,
  theme,
});