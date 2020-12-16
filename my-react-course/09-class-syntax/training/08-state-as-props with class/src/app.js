import React from 'react';
import Counter from './counter.js';
import NumbersBox from './numbersBox.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { delta : 1 };
    this.setState = this.setState.bind(this);
  }
  
  render() {
    return (
      <>
          <NumbersBox delta={this.state.delta} setDelta={this.setState}/>
          <Counter delta={this.state.delta} value={10} setDelta={this.setState}/>
          <Counter delta={this.state.delta} value={20} setDelta={this.setState}/>
          <Counter delta={this.state.delta} value={30} setDelta={this.setState}/>
          <Counter delta={this.state.delta} value={40} setDelta={this.setState}/>
          <Counter delta={this.state.delta} value={50} setDelta={this.setState}/>
      </>
    );
  }
}