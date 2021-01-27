import React from 'react';

class Bomb extends React.Component {
  constructor() {
    super();
    this.btnClick = this.btnClick.bind(this);
    this.state = {bomb: false};
  }

  btnClick() {
    this.setState({bomb: true});
  }

  render() {
    if(this.state.bomb) {
      throw 'Bomb';
    }
    return(
      <button onClick={this.btnClick}>Click to Bomb</button>
    );
  }
}

export default class Demo5 extends React.Component {
  constructor() {
    super();
    this.state = {msg: '' , bomb:0};
  }

  componentDidCatch(error , info) {
    this.setState({msg : error , bomb: ++this.state.bomb});
  }

  render() {
    return (
      <div>
        <h1>Demo5</h1>
        <p>{this.state.msg && `${this.state.msg} count of bomb ${this.state.bomb}`}</p>
        <Bomb/>
        <h1><pre>--------------------------------------------------------------</pre></h1>
      </div>
    );
  }
}





/*
class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { boom: false };
    this.boom = this.boom.bind(this);
  }
  
  boom() {
    this.setState({ boom: true });
  }
  
  render() {
    if (this.state.boom) {
      throw 'Boom!';
    }
    
    return (
      <button onClick={this.boom} key={this.state.bombs}>Boom!</button>
    )
  }
}

export default class Sandbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bombs: 0 };
  }
  
  componentDidCatch(error, info) {
    this.setState({
      bombs: this.state.bombs + 1,
    });
  }
  
  render() {
    return (
      <div>
        <p>{this.state.bombs} bombs blew up</p>
        <Bomb />
      </div>
    )
  }
}

*/