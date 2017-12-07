// import { ListView } from 'jw-components-mobile';
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const data = [
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
//     title: 'Meet hotel',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
//     title: 'McDonald\'s invites you',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
//     title: 'Eat the week',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
// ];
//
// const NUM_ROWS = 20;
// let pageIndex = 0;
//
// function genData(pIndex = 0) {
//   const dataBlob = {};
//   for (let i = 0; i < NUM_ROWS; i++) {
//     const ii = (pIndex * NUM_ROWS) + i;
//     dataBlob[`${ii}`] = `row - ${ii}`;
//   }
//   console.log(dataBlob,'dataBlob');
//   return dataBlob;
// }
//
// class Demo extends React.Component {
//   constructor(props) {
//     super(props);
//
//     /*
//     ListViewDataSource为ListView组件提供高性能的数据处理和访问。我们需要调用方法从原始输入数据中抽取数据来创建ListViewDataSource对象，
//     并用其进行数据变更的比较。原始输入数据可以是简单的字符串数组，也可以是复杂嵌套的对象——分不同区(section)各自包含若干行(row)数据。
//
//     要更新datasource中的数据，请（每次都重新）调用cloneWithRows方法（如果用到了section，则对应cloneWithRowsAndSections方法）。
//     数据源中的数据本身是不可修改的，所以请勿直接尝试修改。clone方法会自动提取新数据并进行逐行对比（使用rowHasChanged方法中的策略），
//     这样ListView就知道哪些行需要重新渲染了。
//     */
//
//     const dataSource = new ListView.DataSource({
//       // 逐行逐行对比，渲染数据
//       rowHasChanged: (row1, row2) => row1 !== row2,
//     });
//
//     this.state = {
//       dataSource,
//       isLoading: true,
//     };
//   }
//
//   componentDidMount() {
//     // you can scroll to the specified position
//     // setTimeout(() => this.lv.scrollTo(0, 120), 800);
//
//     // simulate initial Ajax
//     setTimeout(() => {
//       this.rData = genData();
//       this.setState({
//         dataSource: this.state.dataSource.cloneWithRows(this.rData),
//         isLoading: false,
//       });
//     }, 600);
//
//     console.log(this.state,"state状态改变");
//   }
//
// // 当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用
//   onEndReached = (event) => {
//     // load new data
//     // hasMore: from backend data, indicates whether it is the last page, here is false
//     if (this.state.isLoading && !this.state.hasMore) {
//       return;
//     }
//     console.log('reach end', event);
//     this.setState({ isLoading: true });
//     setTimeout(() => {
//       this.rData = { ...this.rData, ...genData(++pageIndex) };
//       console.log(this.rData,"000000000000")
//       this.setState({
//         dataSource: this.state.dataSource.cloneWithRows(this.rData),
//         isLoading: false,
//       });
//     }, 1000);
//   }
//
//   render() {
//     const separator = (sectionID, rowID) => (
//       <div
//         key={`${sectionID}-${rowID}`}
//         style={{
//           backgroundColor: '#F5F5F9',
//           height: 8,
//           borderTop: '1px solid #ECECED',
//           borderBottom: '1px solid #ECECED',
//         }}
//       />
//     );
//     let index = data.length - 1;
//     const row = (rowData, sectionID, rowID) => {
//       if (index < 0) {
//         index = data.length - 1;
//       }
//       const obj = data[index--];
//       //这里还没弄清楚？？？？
//       console.log(obj,'obj111111111111')
//       console.log(data,"data11111111111")
//       return (
//         <div key={rowID} style={{ padding: '0 15px' }}>
//           <div
//             style={{
//               lineHeight: '50px',
//               color: '#888',
//               fontSize: 18,
//               borderBottom: '1px solid #F6F6F6',
//             }}
//           >{obj.title}</div>
//           <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
//             <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
//             <div style={{ lineHeight: 1 }}>
//               <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
//               <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div>
//             </div>
//           </div>
//         </div>
//       );
//     };
//
//     // console.log(row,'rowpppppppppppppp')
//     return (
//       <ListView
//         ref={el => this.lv = el}
//         dataSource={this.state.dataSource}
//         renderHeader={() => <span style={{ fontSize:'16px'}}>header</span>}
//         renderFooter={() => (<div style={{ padding: 0, textAlign: 'center',fontSize:'16px' }}>
//           {this.state.isLoading ? 'Loading...' : 'Loaded'}
//         </div>)}
//         renderRow={row}
//         renderSeparator={separator}
//         className="am-list"
//         pageSize={4}
//         useBodyScroll
//         onScroll={() => { console.log('scroll'); }}
//         scrollRenderAheadDistance={500}
//         onEndReached={this.onEndReached}
//         onEndReachedThreshold={10}
//       />
//     );
//   }
// }
//
// ReactDOM.render(<Demo />, document.getElementById('root'));


import { PullToRefresh, ListView, Button } from 'jw-components-mobile';
import React from 'react';
import ReactDOM from 'react-dom';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataArr = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
  }
  return dataArr;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
    };
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(genData()),
        height: hei,
        refreshing: false,
        isLoading: false,
      });
    }, 1500);
  }

  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true });
    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        refreshing: false,
        isLoading: false,
      });
    }, 600);
  };

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = [...this.rData, ...genData(++pageIndex)];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  };

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID}
          style={{
            padding: '0 15px',
            backgroundColor: 'white',
          }}
        >
          <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
            {obj.title}
          </div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px' }}>
            <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={obj.img} alt="" />
            <div style={{ display: 'inline-block' }}>
              <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{obj.des}-{rowData}</div>
              <div style={{ fontSize: '16px' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span> 元/任务</div>
            </div>
          </div>
        </div>
      );
    };
    return (<div>
      <Button
        style={{ margin: '30px 15px' }}
        inline
        onClick={() => this.setState({ useBodyScroll: !this.state.useBodyScroll })}
      >
        {this.state.useBodyScroll ? 'useBodyScroll' : 'partial scroll'}
      </Button>
      <ListView
        key={this.state.useBodyScroll ? '0' : '1'}
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() => <span>Pull to refresh</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        useBodyScroll={this.state.useBodyScroll}
        style={this.state.useBodyScroll ? {} : {
          height: this.state.height,
          border: '1px solid #ddd',
          margin: '5px 0',
        }}
        pullToRefresh={<PullToRefresh
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />}
        onEndReached={this.onEndReached}
        pageSize={5}
      />
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
