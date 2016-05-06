// action creators are functions that take a param and return
// an 'action' that is consumed by a reducer. This may seem like
// unneeded boilerplate  but it's **really** nice to have a file
// with *all* possible ways to mutate the state of the app.

Actions= {};
// Activities data has changed
Actions.activityChanged = function activitiesChanged(activity) {
	return {
		type: 'ACTIVITY_CHANGED',
		activity
	};
};

Actions.activityAdded = function activitiesChanged(activity) {
	return {
		type: 'ACTIVITY_ADDED',
		activity
	};
}

Actions.selectActivity = function selectActivity(activity) {
	return {
		type: 'SELECT_ACTIVITY',
		activity
	}
};

// Log DDP messages
Actions.logDDP = function logDDP(message) {
  return {
    type: 'LOG_DDP',
    message: message
  };
};