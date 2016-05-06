import { Meteor } from 'meteor/meteor';

// Return All Activities
Meteor.publish('activities', () => {
	return Activities.find();
});