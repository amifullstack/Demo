import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo.js';

const mapStateToProps = state => {
  return { todos: state.Todo.todos}
};

const TodoContainer = ({ todos }) => {
  return (
    <Todo todos={todos} />
  );
}

export default connect(mapStateToProps)(TodoContainer);
