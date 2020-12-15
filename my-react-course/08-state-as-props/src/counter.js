import React from 'react';
import { useState } from 'react';

export default function Counter(props) {
  const {delta , value , setDelta} = props;
  const [count , setCount] = useState(0);

  function inc() {
    const newVal = count + delta;
    if(newVal > value*10 && delta!==1) {
      setDelta(1);
    } else {
      setCount(newVal);
    }
  }

  function dec() {
    setCount(oldVal => oldVal - delta);
  }

  function reset() {
    setCount(0);
  }

  return(
    <div>
        <label>I was clicked {count} times and max to change increase to 1: {10*value}
            <button onClick = {inc}>Click me to increase</button>
            <button onClick = {dec} >Click me to decrease</button>
            <button onClick = {reset}>Click me to reset</button>
        </label>
    </div>
  );
}