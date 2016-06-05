import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Todo from './Todo';

import { callAddTodo } from '../../redux/async-actions';

const Home = (props) => {
  const { todos, dispatchCallAddTodo } = props;
  const handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      const elem = e.target;
      e.preventDefault();
      dispatchCallAddTodo(elem.value);
      elem.value = '';
    }
  };
  return (
    <View>

      <View>
        {todos.map((t, i) => <Todo id={t._id} message={t.message} finished={t.finished} key={i} />)}
      </View>
    </View>
  );
};

Home.propTypes = {
  todos: React.PropTypes.array.isRequired,
  dispatchCallAddTodo: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = (dispatch) => ({
  dispatchCallAddTodo: data => dispatch(callAddTodo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
