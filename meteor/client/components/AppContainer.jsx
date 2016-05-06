import React from 'react';
import {connect} from 'react-redux';

class AppContainer extends React.Component {
  componentWillUnmount() {
  }

  render() {
    //debugger // checkout this.props with debugger!
    return (
      <div>
      {
        Object.keys(this.props.activities).map((_id) => {
          return (
            <div>
              <p>id: {_id}</p>
              <p>name: {this.props.activities[_id].name}</p>
            </div>
          ); 
        })
      }
      </div>
    );
  }
}

// choose what state we send to comp. above and it's children, in
// this app we're sending everything at once, we're also splitting
// it out into three properties to match previous state shape, you
// could easily just return `state` for this small app

function mapStateToProps(state) {
  return {
    activities: state.activities,
    selectedPlayer: state.userInterface.selectedPlayer,
    statusMessage: state.userInterface.statusMessage,
    ddpMessages: state.userInterface.ddpMessages
  };
}

this.AppContainer = connect(mapStateToProps)(AppContainer);
