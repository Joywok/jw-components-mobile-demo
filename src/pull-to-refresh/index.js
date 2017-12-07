import { PullToRefresh, Button } from 'jw-components-mobile';
import React from 'react';
import ReactDOM from 'react-dom';

function genData() {
  const dataArr = [];
  for (let i = 0; i < 20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
      hasMore:true,
    };
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      data: genData(),
    }), 0);
  }

  render() {

    let indicator = this.state.hasMore ? {activate: '下拉刷新',finish:" ",deactivate:'下拉刷新'}:{activate: '没有更多了',finish:" ",deactivate:'没有更多了'}
    return (<div>
      <Button
        style={{ marginBottom: 15 }}
        onClick={() => this.setState({ down: !this.state.down })}
      >
        direction: {this.state.down ? 'down' : 'up'}
      </Button>
      <PullToRefresh
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={this.state.down ? indicator : { activate: '上拉刷新' }}
        direction={this.state.down ? 'down' : 'up'}
        distanceToRefresh={window.devicePixelRatio * 25}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true });
          setTimeout(() => {
            this.setState({ refreshing: false });
          }, 1000);
        }}
      >
        {this.state.data.map(i => (
          <div key={i} style={{ textAlign: 'center', padding: 20 }}>
            {this.state.down ? 'pull down' : 'pull up'} {i}
          </div>
        ))}
      </PullToRefresh>
    </div>);
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'));
