import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

/*
//function return class Component;
function withClock(Component) {
  return class WithClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {tick : 0};
      this.updateTick = this.updateTick.bind(this);
    }
    
    updateTick() {
      this.setState(state => ({tick : state.tick + 1}));
    }
  
    componentDidMount() {
      this.timerId = setInterval(this.updateTick , 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerId);
    }
  
    render() {
      return (
        <Component {...this.props} tick = {this.state.tick}/>
      );
    }
  }
}
*/

//function return function Component;
function withClock(Component) {
  return function WithClock(props) {
    const { ms } = props;
    const [tick , setTick] = useState(0);

    function updateTick() {
      setTick(tick => tick + 1);
    }

    useEffect(()=>{
      const timerId = setInterval(updateTick , ms);
      return ()=>clearInterval(timerId);
    });

    return(<Component {...props} tick={tick}/>);
  }
}


//function
const FourClick = withClock(function FourClick({tick}) {
      return (
        <p> 4 tick: {tick * 4} </p>
      );
    }
);
FourClick.defaultProps = {  ms: 1000,};


//function
const DoubleTick = withClock(function DoubleTick({tick}) {
    return (
      <p>double tick ... {tick * 2}</p>
    );
});
DoubleTick.defaultProps = {  ms: 1000,};


//class
const NewsTicker = withClock(class NewsTicker extends React.Component {
  render() {
    return (
      <p>{this.props.items[this.props.tick % this.props.items.length]}</p>
    );
  }
});
NewsTicker.defaultProps = { ms: 1000,};


//class
const Clock = withClock(class Clock extends React.Component {
  render() {
    return (
      <p>tick... {this.props.tick}</p>
    );
  }
});
Clock.defaultProps = { ms: 1000,};


const App = () => {
  const items = [
    "I lit up from Reno",
    "I was trailed by twenty hounds",
    "Didn't get to sleep that night",
    "Till the morning came around",
  ];

  return (
    <div>
        <Clock/>
        <NewsTicker items={items} ms = {2000}/>
        <DoubleTick/>
        <FourClick/>
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);