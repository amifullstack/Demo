import React, { Component } from 'react';

// CSS
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      
        <header>           
          <h1 className="logo"><a href="#">RenderUser</a></h1>            
              <ul className="main-nav">
                {/* <li><a href="/">Home</a></li> */}
                {/* <li>
                  <a href="http://sanjayshr.surge.sh/" target="_blank">Portfolio</a>                  
                </li> */}
              </ul>         
        </header>      
    );
  }
}

export default Header;