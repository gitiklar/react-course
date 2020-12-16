import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
      super(props);
      this.value = props.value;
      this.setDelta = props.setDelta;
      this.state = {count : 0};
  } 

  inc() {
      const newVal = this.state.count + this.delta;
      if(newVal > this.value && this.delta!==1) {
        this.setDelta( { delta : 1 });
      } else {
        this.setState({count : newVal});
      }
  }

  dec() {
      this.setState({count : this.state.count - this.delta});
  }

  reset() {
      this.setState({count : 0});
  }

  render() {
    this.delta = this.props.delta;
    const count = this.state.count;

    return(
        <div>
            <label>I was clicked {count} times and max to change increase to 1: {this.value}
                <button onClick = {this.inc.bind(this)}>Click me to increase</button>
                <button onClick = {this.dec.bind(this)} >Click me to decrease</button>
                <button onClick = {this.reset.bind(this)}>Click me to reset</button>
            </label>
        </div>
      );
  }
}