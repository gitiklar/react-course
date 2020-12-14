import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person';

import '../css/main.css';

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <Person name="jeff" />
      <Person name="bob" />
      <Person name="dana" />
    </>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
