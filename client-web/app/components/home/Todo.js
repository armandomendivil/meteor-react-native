import React from 'react';
import { connect } from 'react-redux';
import { callRemoveTodo, callEditTodo } from '../../redux/async-actions';

const Todo = (props) => {
  const { id, finished, message, dispatchCallRemoveTodo, dispatchCallEditTodo } = props;
  const handleRemove = () => {
    dispatchCallRemoveTodo(id);
  };
  const handleEdit = () => {
    dispatchCallEditTodo(id, !finished);
  };
  const finishedClass = () => {
    if (finished) {
      return 'todo-item todo-finished';
    }
    return 'todo-item';
  };
  return (
    <div styleName={finishedClass()}>
      <input type="checkbox" checked={finished} value="" onChange={handleEdit} />
      {message}
      <button type="button" onClick={handleRemove}>
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
};

Todo.propTypes = {
  message: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  finished: React.PropTypes.bool,
  dispatchCallRemoveTodo: React.PropTypes.func.isRequired,
  dispatchCallEditTodo: React.PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  dispatchCallRemoveTodo: _id => dispatch(callRemoveTodo(_id)),
  dispatchCallEditTodo: (_id, finished) => dispatch(callEditTodo(_id, finished)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
