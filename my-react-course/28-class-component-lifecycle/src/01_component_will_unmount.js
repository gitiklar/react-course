import React from 'react';

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {m:0 , s:0};
    this.timerID = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let {m , s} = this.state;
    s < 59 ? s++: (s=0 , m++);
    this.setState({m ,s});
  }

  render() {
    const {m , s} = this.state;
    return (
      <div style={{fontSize:'1.5rem'}}>
        <h1> Demo1 </h1>
        <h1>
           {String(m).padStart(2 , 0)} : {String(s).padStart(2 , 0)}
           <pre>--------------------------------------------------------------</pre>
        </h1>
      </div>
    );
  }
}