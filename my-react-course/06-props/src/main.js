import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person';

const App = () => {
const obj = {  name:"bob", live:"israel", likes:"stuff",};
const colors = ['red', 'blue' , 'yellow'];
const p = Math.random();
return (
    <div>
      <Person {...obj} show={p > 0.5} />
      <Person name = "bob" age = {25} favoriteColors = {colors} show={p > 0.5}/>
    </div>
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
