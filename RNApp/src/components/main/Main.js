import React from 'react';
import { callGetAllTodo } from '../../redux/async-actions';
import { connect } from 'react-redux';
import Home from '../home/Home';

class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(callGetAllTodo());
  }
  render() {
    return (
      <View>
        <Home />
      </View>
    );
  }
}

Main.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default connect()(Main);
