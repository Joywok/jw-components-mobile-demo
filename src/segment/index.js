import React from 'react';
import ReactDOM from 'react-dom';
import { List, SegmentedControl,WingBlank } from 'jw-components-mobile';
const SegmentedControlExample = React.createClass({
  onChange(e) {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  },
  onValueChange(value) {
    console.log("当前选中是：",value)
  },
  render() {
    return (
      <div>
      <WingBlank className="sc-example example" style={{margin:'30px 10px' }}>
        <SegmentedControl  values={['1', '2','3', '4']}  
         tintColor={'#157efb'} />
         <div style={{marginTop:'10px'}}></div>
        <SegmentedControl  values={['1', '2','3','4']} 
         disabled tintColor={'#4174d9'} />
         <div style={{marginTop:'10px'}}></div>
        <SegmentedControl  values={['1', '2', '3','4']} 
          selectedIndex={1} 
          tintColor={'#0ab771'}/>
         <div style={{marginTop:'10px'}}></div>
        <SegmentedControl  values={['1', '2', '3','4']} 
         tintColor={'#f2bb16'}/>
         <div style={{marginTop:'10px'}}></div>
        <SegmentedControl   values={['1', '2', '3','4']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
          tintColor={'#777777'}/>
      </WingBlank>
      <span>1720978678</span>
      </div>
    );
  },
});
ReactDOM.render(<SegmentedControlExample  />, document.getElementById('root'));
