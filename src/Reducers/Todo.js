import { ADD_TODO } from '../Actions/index';

const initialState = {
  todos:[
    {
      id: 1,
      title: "Todo 1"
    },
    {
      id: 2,
      title: "Todo 2"
    }
  ]
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

export default todo;