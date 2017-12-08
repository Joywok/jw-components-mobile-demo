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
// // 自定义容器
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
//     // 循环渲染页面
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
//     console.log(index,'index');
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
//         style={{
//          height: this.state.height,
//          overflow: 'auto',
//        }}
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


// import { ListView } from 'jw-components-mobile';
// import { StickyContainer, Sticky } from 'react-sticky';
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
// const NUM_SECTIONS = 5;
// const NUM_ROWS_PER_SECTION = 5;
// let pageIndex = 0;
//
// const dataBlobs = {};
// let sectionIDs = [];
// let rowIDs = [];
// function genData(pIndex = 0) {
//   for (let i = 0; i < NUM_SECTIONS; i++) {
//     const ii = (pIndex * NUM_SECTIONS) + i;
//     const sectionName = `Section ${ii}`;
//     sectionIDs.push(sectionName);
//     dataBlobs[sectionName] = sectionName;
//     rowIDs[ii] = [];
//
//     for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
//       const rowName = `S${ii}, R${jj}`;
//       rowIDs[ii].push(rowName);
//       dataBlobs[rowName] = rowName;
//     }
//   }
//   sectionIDs = [...sectionIDs];
//   rowIDs = [...rowIDs];
// }
//
// class Demo extends React.Component {
//   constructor(props) {
//     super(props);
//     const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
//     const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
//
//     const dataSource = new ListView.DataSource({
//       getRowData,
//       getSectionHeaderData: getSectionData,
//       rowHasChanged: (row1, row2) => row1 !== row2,
//       sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
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
//       genData();
//       this.setState({
//         dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
//         isLoading: false,
//       });
//     }, 600);
//   }
//
//   // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
//   // componentWillReceiveProps(nextProps) {
//   //   if (nextProps.dataSource !== this.props.dataSource) {
//   //     this.setState({
//   //       dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.dataSource),
//   //     });
//   //   }
//   // }
//
//   onEndReached = (event) => {
//     // load new data
//     // hasMore: from backend data, indicates whether it is the last page, here is false
//     if (this.state.isLoading && !this.state.hasMore) {
//       return;
//     }
//     console.log('reach end', event);
//     this.setState({ isLoading: true });
//     setTimeout(() => {
//       genData(++pageIndex);
//       this.setState({
//         dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
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
//               <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span>¥ {rowID}</div>
//             </div>
//           </div>
//         </div>
//       );
//     };
//
//     return (
//       <ListView
//         ref={el => this.lv = el}
//         dataSource={this.state.dataSource}
//         className="am-list sticky-list"
//         useBodyScroll
//         renderSectionWrapper={sectionID => (
//           <StickyContainer
//             key={`s_${sectionID}_c`}
//             className="sticky-container"
//             style={{ zIndex: 4 }}
//           />
//         )}
//         renderSectionHeader={sectionData => (
//           <StickyContainer>
//             <Sticky>
//               {({
//                 style,
//               }) => (
//                 <div
//                   className="sticky"
//                   style={{
//                     ...style,
//                     zIndex: 3,
//                     paddingLeft:"15px",
//                     backgroundColor: parseInt(sectionData.replace('Section ', ''), 10) % 2 ?
//                       '#5890ff' : '#F8591A',
//                     color: 'white',
//                   }}
//                 >{`Task ${sectionData.split(' ')[1]}`}</div>
//               )}
//             </Sticky>
//             </StickyContainer>
//         )}
//         renderHeader={() => <span>header</span>}
//         renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
//           {this.state.isLoading ? 'Loading...' : 'Loaded'}
//         </div>)}
//         renderRow={row}
//         renderSeparator={separator}
//         pageSize={4}
//         onScroll={() => { console.log('scroll'); }}
//         scrollEventThrottle={200}
//         onEndReached={this.onEndReached}
//         onEndReachedThreshold={10}
//       />
//     );
//   }
// }
//
// ReactDOM.render(<Demo />, document.getElementById('root'));

import { province as provinceData } from 'antd-mobile-demo-data';
import { StickyContainer, Sticky } from 'react-sticky';
import { ListView, List } from 'jw-components-mobile';
import {SearchBar} from 'antd-mobile';
import React from 'react';
import ReactDOM from 'react-dom';

const { Item } = List;

function genData(ds, province) {
  const dataBlob = {};
  const sectionIDs = [];
  const rowIDs = [];
  Object.keys(province).forEach((item, index) => {
    sectionIDs.push(item);
    dataBlob[item] = item;
    rowIDs[index] = [];

    province[item].forEach((jj) => {
      rowIDs[index].push(jj.value);
      dataBlob[jj.value] = jj.label;
    });
  });
  return ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      inputValue: '',
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    // simulate initial Ajax
    setTimeout(() => {
      this.setState({
        dataSource: genData(this.state.dataSource, provinceData),
        isLoading: false,
      });
    }, 600);
  }

  onSearch = (val) => {
    const pd = { ...provinceData };
    Object.keys(pd).forEach((item) => {
      const arr = pd[item].filter(jj => jj.spell.toLocaleLowerCase().indexOf(val) > -1);
      if (!arr.length) {
        delete pd[item];
      } else {
        pd[item] = arr;
      }
    });
    this.setState({
      inputValue: val,
      dataSource: genData(this.state.dataSource, pd),
    });
  }

  render() {
    return (<div style={{ paddingTop: '44px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <SearchBar
          value={this.state.inputValue}
          placeholder="Search"
          onChange={this.onSearch}
          onClear={() => { console.log('onClear'); }}
          onCancel={() => { console.log('onCancel'); }}
        />
      </div>
      <ListView.IndexedList
        dataSource={this.state.dataSource}
        className="am-list sticky-list"
        useBodyScroll
        renderSectionWrapper={sectionID => (
          <StickyContainer
            key={`s_${sectionID}_c`}
            className="sticky-container"
            style={{ zIndex: 4 }}
          />
        )}
        renderSectionHeader={sectionData => (
          <StickyContainer>
            <Sticky>
              {({
                style,
              }) => (
                <div
                  className="sticky"
                  style={{
                    ...style,
                    zIndex: 3,
                    backgroundColor: sectionData.charCodeAt(0) % 2 ? '#5890ff' : '#F8591A',
                    color: 'white',
                  }}
                >{sectionData}</div>
              )}
            </Sticky>
          </StickyContainer>
        )}
        renderHeader={() => <span>custom header</span>}
        renderFooter={() => <span>custom footer</span>}
        renderRow={rowData => (<Item>{rowData}</Item>)}
        quickSearchBarStyle={{
          top: 85,
        }}
        delayTime={10}
        delayActivityIndicator={<div style={{ padding: 25, textAlign: 'center' }}>rendering...</div>}
      />
    </div>);
  }
}

ReactDOM.render(<Demo />,document.getElementById('root'));
