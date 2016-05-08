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

// these reducers *must* be pure to use time-travel dev-tools
// never directly mutate the `state` param, use merge instead

function userInterface(state, action) {
  state = state || initialInterfaceState;

  switch (action.type) {

    case 'LOG_DDP':
      // These messages will appear in the Redux debug tool
      // since they are added to the state.
      var messages = state.ddpMessages.concat(action.message);
      return merge(state, {ddpMessages: messages});

    default:
      return state;
  }
};

export default userInterface;