/*
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function Display(props) {
  const { score , reset } = props;
  const styleDivcontainer = {
    background: '#d2d2d2',
    padding: '10px 2px',
    boxShadow: '0 0 1px 1px rgba(0,0,0,0.6)',
  }

  const styleDivScore = {
    display: 'inline-block',
    background: 'black',
    color: 'white',
    padding: '10px',
    fontFamily: 'Orbitron, sans-serif',
  }

  return (
    <div style={styleDivcontainer}>
      You scored:
      <div style={styleDivScore}>{score}</div>
      <button onClick = {reset}>Reset</button>
    </div>
  );
}

function Counter(props) {
  const {checkValue} = props;
  const [ score, setCount ] = useState(0);

  function inc() {
    const newVal = score + 1;
    setCount(newVal);
    checkValue(newVal)
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <pre>Debug: score = {score}</pre>
      <Display score = {score} reset = {reset}/>
      <button onClick={inc}>Click Me</button>
    </div>
  );
}

const App = () => {
  const [maxValue, setMaxValue] = useState(0);

  function checkValue(value) {
    value > maxValue && setMaxValue(value);
  }

  return (
    <div>
      <p>The largest count is: {maxValue}</p>
      <Counter checkValue = {checkValue} />
      <Counter checkValue = {checkValue} />
      <Counter checkValue = {checkValue} />
      <Counter checkValue = {checkValue} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
*/


import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function Display(props) {
  const { score , reset } = props;
  const styleDivcontainer = {
    background: '#d2d2d2',
    padding: '10px 2px',
    boxShadow: '0 0 1px 1px rgba(0,0,0,0.6)',
  }

  const styleDivScore = {
    display: 'inline-block',
    background: 'black',
    color: 'white',
    padding: '10px',
    fontFamily: 'Orbitron, sans-serif',
  }

  return (
    <div style={styleDivcontainer}>
      You scored:
      <div style={styleDivScore}>{score}</div>
      <button onClick = {reset}>Reset</button>
    </div>
  );
}

function Counter(props) {
  const {score , updateScore , index} = props;

  function inc() {
    const newVal = score + 1;
    updateScore(index ,newVal);
  }

  function reset() {
    updateScore(index , 0);
  }

  return (
    <div>
      <pre>Debug: score = {score}</pre>
      <Display score = {score} reset = {reset}/>
      <button onClick={inc}>Click Me</button>
    </div>
  );
}

const App = () => {
  const countOfCounters = 5;
  const [scores, setScores ] = useState(new Array(countOfCounters).fill(0));
  const [maxValue, setMaxValue] = useState(0);

  function updateMaxValue(newArray) {
    setMaxValue(newArray.reduce((acc , val) => val > acc ? val : acc));
  }

  function updateScore(index , value) {
    const newArray = scores.map((val , ind)=> ind !== index ? val : value);
    setScores(newArray);
    updateMaxValue(newArray);
  }

  function createCounters() {
    const arrayOfCounters = [];
    for (let i=0 ; i<= countOfCounters ; i++) {
      arrayOfCounters.push(<Counter key = {i} score = {scores[i]} updateScore = {updateScore} index = {i}/>);
    }
    return arrayOfCounters;
  }

  return (
    <div>
      <p>The largest score is: {maxValue}</p>
       {createCounters()}
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
