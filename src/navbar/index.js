import { List, NavBar} from "jw-components-mobile";
import React from 'react';
import ReactDOM from 'react-dom';

const NavBarExample = React.createClass({
  
  render() {
    return ( <div>
    <NavBar
      mode="light"
      leftContent="Back"
      rightContent="next"
    >NavBar</NavBar></div>);
  },
});


ReactDOM.render(<NavBarExample />, document.getElementById('root'));
