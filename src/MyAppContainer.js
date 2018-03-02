import React from 'react';
import { connect } from 'react-redux';
import App from './App';


const mapStateToProps = state => {
  return {
    state: state.todo
  };
}

const MyAppContainer = props => {
  return(
    <App state={props.state}/>
  )
}

export default connect(mapStateToProps)(MyAppContainer);
