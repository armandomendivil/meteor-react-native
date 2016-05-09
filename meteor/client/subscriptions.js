// Subscriptions to activities
var subId = DDP.sub('activities');
DDP.on('ready', function (message) {
  if (message.id === subId) {
      console.log('activities ready');
  }
});

DDP.on('added', function (message) {
  if(message.collection !== 'activities'){return}
  var activity = message.fields;
  activity._id = message.id;
  Store.dispatch(Actions.logDDP(message));
  Store.dispatch(Actions.activityAdded(activity));
});

DDP.on('changed', function (message) {
  if(message.collection !== 'activities'){return}
  var activity = message.fields;
  activity._id = message.id;
  Store.dispatch(Actions.logDDP(message));
  Store.dispatch(Actions.activityChanged(activity));
});

DDP.on('removed', function (message) {
  if(message.collection !== 'activities'){return}
  Store.dispatch(Actions.logDDP(message));
  Store.dispatch(Actions.activityDeleted(message.id));
});
