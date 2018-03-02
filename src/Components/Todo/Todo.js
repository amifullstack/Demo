import React, { Component } from 'react';

class Todo extends Component {
  constructor() {
    super();
  }

  render() {
    const todos = this.props.todos;
    // console.log(todos)
    return(
      <div>
        <ul>
          {todos.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
