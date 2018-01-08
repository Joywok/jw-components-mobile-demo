import { List, NavBar,Loading} from "jw-components-mobile";
import React from 'react';
import ReactDOM from 'react-dom';
const Item = List.Item;
const LoadingExample = React.createClass({
  render() {
    return ( <div>
        <Loading type="bounce"  loadingStyle={{width:'10px',height:'10px'}} />
      </div>);
  },
});

ReactDOM.render(<LoadingExample />, document.getElementById('root'));
