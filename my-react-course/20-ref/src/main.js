import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useRef } from 'react';

import '../styles/main.scss';

const App = () => {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const divContainer = useRef(null);
  const word2Ref = useRef(null);

  function showMyThing() {
    const divDOM = divContainer.current;
    alert(`${divDOM.getAttribute("data-my-stuff")} ${divDOM.getAttribute("data-my-name")}`);
    alert(`${divDOM.dataset.myStuff} ${divDOM.dataset.myName}`);
  }

  function setFirstWord(val) {
    setWord1(val);
    if(val.endsWith(' ')) {
        word2Ref.current.focus();
    }
  }

  function setSecondWord(val) {
    setWord2(val);
  }

  return (
    <div data-my-stuff="hello" data-my-name = "gita" ref={divContainer}>
      <button onClick={showMyThing}>Show My Thing</button>
      <input type="text" value={word1} onChange={(e) => setFirstWord(e.target.value)} />
      <input type="text" value={word2} onChange={(e) => setSecondWord(e.target.value)} ref = {word2Ref}/>
    </div>
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
