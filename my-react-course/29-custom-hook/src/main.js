import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function useTimer(ms = 1000) {
  const [tick , setTick] = useState(0);

  function updateTick() {
    setTick(v => v + 1);
  }

  useEffect(()=>{
    const timerId = setInterval(updateTick , ms);
    return ()=>clearInterval(timerId);
  },[]);

  return tick;
}

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
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
