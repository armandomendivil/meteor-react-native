import * as Actions from './actions/activities';
import logDDP from './actions/logDDP';
import Store from './store/configureStore'
// Subscriptions to activities
var subId = DDP.sub('activities');
DDP.on('ready', function (message) {
  if (message.id === subId) {
      console.log('activities ready');
  }
});

// Added activities
DDP.on('added', function (message) {
  if(message.collection !== 'activities'){return}
  var activity = message.fields;
  activity._id = message.id;
  Store.dispatch(logDDP(message));
  Store.dispatch(Actions.activityAdded(activity));
});

// Changed Activities
DDP.on('changed', function (message) {
  if(message.collection !== 'activities'){return}
  var activity = message.fields;
  activity._id = message.id;
  Store.dispatch(logDDP(message));
  Store.dispatch(Actions.activityChanged(activity));
});

// Removed activities
DDP.on('removed', function (message) {
  if(message.collection !== 'activities'){return}
  Store.dispatch(logDDP(message));
  Store.dispatch(Actions.activityDeleted(message.id));
});
