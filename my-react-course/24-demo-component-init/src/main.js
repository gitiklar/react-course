import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function Timer(props) {
  const [ticks, setTicks] = useState(0);

  useEffect(()=> {
    // What to do
    const timer = setInterval(() => {
      setTicks(v => v + 1);  console.log('Ouch!');
      //and not setTicks(ticks + 1) -> this option will look on the first tick only and will not update on each calling. because it is happend after the first render only
    } , 1000);
    // What to undo
    return () => { clearInterval(timer); }
    // When to undo/do
  }, []);

  return (
    <p>Ticks: {ticks}</p>
  );
}

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  function toggleTimer() {
    setShowTimer(val => !val);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={toggleTimer}>Hide/Show timer</button>
      {showTimer && <Timer />}
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
