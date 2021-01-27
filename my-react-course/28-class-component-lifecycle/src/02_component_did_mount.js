import React from 'react';

export default class DatePicker extends React.Component {
  constructor() {
    super();
    this.state = {  date: new Date().toISOString().slice(0, 10),  };
    this.inputDateRef = React.createRef();
  }

  componentDidMount() {
    this.inputDateRef.current.flatpickr();    
  }

  render() {
    const {date} = this.state;
    return (
      <div style={{fontSize:'1.5rem'}}>
        <h1>Demo2</h1>
        <input type='dateTime' value={date} ref = {this.inputDateRef}  onInput={(e)=>{this.setState({date:e.target.value})}}/>
        <div>   <label>{date}</label>   </div>
        <h1><pre>--------------------------------------------------------------</pre></h1>
      </div>
    );
  }
}


