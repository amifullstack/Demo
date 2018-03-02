import React, { Component } from 'react';

import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default Home;