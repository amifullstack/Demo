import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <footer>
        <h4><a href="http://sanjayshr.surge.sh" target="_blank">sanjayshr</a> &copy;2018</h4>
      </footer>
    );
  }
}

export default Footer;