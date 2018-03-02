import React, { Component } from 'react';
import { connect } from 'react-redux';
import uid from 'uuid';

// Action
import { addTodo } from '../../../Actions/index';


const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  }
}

class AddTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uid();
    this.props.addTodo({ id, title });
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            ref="title"
            id="title"
            value={title}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddTodoForm);
