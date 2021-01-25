import React from 'react';
import { useState } from 'react';

export default function Counter() {
  const [count , setCount] = useState(0);
  const [numberInput , setNumberInput] = useState(1);

  function saveNewInput(e) {
      setNumberInput(Number(e.target.value));
  }
  
  function inc() {
      setCount(oldValue => oldValue + numberInput);
  }

  function dec() {
    setCount(oldValue => oldValue - numberInput);
  }

  function reset() {
      setCount(0);
  }

  const styleBtn = {
    width: '5rem',
    margin: '5px',
  }

  return (
    <div>
      <label>
        Increase By:
        <input type="number" value={numberInput} onChange={saveNewInput}/>
      </label>
      <p>
        I was clicked {count} times    
        <button style={styleBtn} onClick={inc}>Click Me to increase</button>
        <button style={styleBtn} onClick={dec}>Click Me to decrease</button>
        <button style={styleBtn} onClick={reset}>Reset</button>
      </p>
    </div>
  );
}
