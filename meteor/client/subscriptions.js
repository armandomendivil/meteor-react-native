var subId = DDP.sub('activities');
DDP.on('ready', function (message) {
  debugger
  if (message.id === subId) {
      console.log('activities ready');
  }
});

DDP.on('added', function (message) {
  debugger
  if(message.collection !== 'activities'){return}
  var player = message.fields;
  player._id = message.id;
  Store.dispatch(Actions.logDDP(message));
  Store.dispatch(Actions.activityAdded(player));
});

DDP.on('changed', function (message) {
  if(message.collection !== 'activities'){return}
  var player = message.fields;
  player._id = message.id;
  Store.dispatch(Actions.logDDP(message));
  Store.dispatch(Actions.playerChanged(player));
});

DDP.on('removed', function (message) {
  if(message.collection !== 'activities'){return}
  Store.dispatch(Actions.logDDP(message));
  Store.dispatch(Actions.playerDeleted(message.id));
});
