import {selectActivity, activityChanged} from '../actions';
Reducers = {};

let initialInterfaceState = {
  selectedActivity: {},
  statusMessage: '',
  ddpMessages: []
};


/*
  merge
  Object.assign({}, objectA, objectB); ES6
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

  Destructuring Assignment using the Spread ... operator
  {...objectA, ...objectB}; ES7
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/
function merge(objectA, objectB) {
  return Object.assign({}, objectA, objectB);
}


/*
Reducers.activities
Manages changes to the state.activities collection.
The state.activities collection is stored as an object with _id keys, you can
view the activities collection structure in the Redux Dev Tools sidebar.
*/
function  activities(state = {}, action) {

  switch(action.type) {
    case 'ACTIVITY_ADDED':
      return {...state, [action.activity._id]: action.activity};

    case 'ACTIVITY_CHANGED':
      // Data has changed
      var oldActivity = state[action.activity._id]
      return {
        ...state,
        [action.activity._id]: merge(oldActivity, action.activity)
      }

    default:
      return state;
  }
}

export default activities;