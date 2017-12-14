import { JwList } from 'jw-components-mobile/lib/list';
import { Radio } from 'jw-components-mobile';
import React from 'react';
import ReactDOM from 'react-dom';

// console.log(JwList,'oooooooo')
const RadioItem = Radio.RadioItem;

class Test extends React.Component {
  state = {
    value: 0,
    value2: 0,
    value3: 0,
    value4: 0,
  };
  onChange = (value) => {
    console.log('checkbox');
    this.setState({
      value,
    });
  };

  componentDidMount(){
    // $(ReactDOM.findDOMNode(this.refs.jwRadio)).closest(".am-radio-checked").find(".am-list-content").addClass('jw-radio-checked')
  }

  render() {
    // console.log(JwList,'pppppppppp')
    setTimeout(()=>{
      $('.am-radio').closest('.jw-radio').find('.am-list-content').removeClass('jw-radio-checked');
      $('.am-radio-checked').closest('.jw-radio').find('.am-list-content').addClass('jw-radio-checked');
    })
    const { value, value2, value3, value4 } = this.state;
    const data = [
      { value: 0, label: 'doctor' },
      { value: 1, label: 'bachelor' },
      { value: 2, label: 'teacher' },
      { value: 3, label: 'computer' },
    ];

    return (<div>
      <JwList renderHeader={() => 'RadioItem demo'}>
        {data.map(i => (
          <RadioItem className="jw-radio" key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </RadioItem>
        ))}
      </JwList>
    </div>);
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));
