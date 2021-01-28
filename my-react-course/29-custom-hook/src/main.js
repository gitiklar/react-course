import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useState , useEffect } from 'react';
import { useInterval , useTimer } from './useClock';

function NewsTicker({items}) {
  const index = useTimer(2000);
  return (
    <p>{items[index % items.length]}</p>
  );
}

function Clock() {
  const tick = useTimer();
  return (
    <p>tick... {tick}</p>
  );
}

function TestUseInterval() {
  const [tick , setTick] = useState(1);
  
  useInterval(()=>{
    setTick(tick * 2);
  } , 1500);
  
  return (
    <p>tick twice... {tick}</p>
  );
}

const App = () => {
  const items = [
    "I lit up from Reno",
    "I was trailed by twenty hounds",
    "Didn't get to sleep that night",
    "Till the morning came around",
  ];

  return (
    <div>
      <Clock />
      <NewsTicker items={items} />
      <TestUseInterval/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
