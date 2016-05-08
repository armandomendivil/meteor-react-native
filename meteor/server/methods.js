import { Meteor } from 'meteor/meteor';

Meteor.methods({
	'activity.fetch': function() {
		// Fetch a single activity when activityId is given, else fetch all activities
		var options = activityId || {};
		return Activity.find(options).fetch();
	},

	'activity.update': function(activityId) {

		Activity.update({_id: activityId});
		return Activity.findOne(activityId)
	},
});