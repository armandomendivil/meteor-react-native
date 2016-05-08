import { combineReducers } from 'redux';
import userInterface from './userInterface';
import activities from './activities';

const rootReducer = combineReducers({
  userInterface: userInterface,
  activities: activities,
});

export default rootReducer;