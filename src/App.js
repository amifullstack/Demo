import React, { Component } from 'react';
import Home from './Components/Home/Home'
import TodoContainer from './Components/Todo/TodoContainer';
import AddTodoForm from './Components/Todo/AddTodoForm/AddTodoForm';

// css
import './App.css'

// // Temp Redux
// import { addTodo } from './Actions/index'
// import Store from './Store/Store'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // window.store = Store;
    // window.addTodo = addTodo;
    return(
      <div className="App">        
        <Home />
        {/* <AddTodoForm />
        <TodoContainer /> */}
      </div>
    )
  }
}

export default App;
