// action creators are functions that take a param and return
// an 'action' that is consumed by a reducer. This may seem like
// unneeded boilerplate  but it's **really** nice to have a file
// with *all* possible ways to mutate the state of the app.

// Activities data has changed
export function activitiesChanged(activity) {
	return {
		type: 'ACTIVITY_CHANGED',
		activity
	};
};

export function activityAdded(activity) {
	return {
		type: 'ACTIVITY_ADDED',
		activity
	};
}

export function selectActivity(activity) {
	return {
		type: 'SELECT_ACTIVITY',
		activity
	}
};

export function activityDeleted(_id) {
  return {
    type: 'ACTIVITY_DELETED',
    activity: {_id: _id}
  };
};