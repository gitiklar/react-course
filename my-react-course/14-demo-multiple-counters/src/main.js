import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

///////////////////////////////             Display              ///////////////////////////////

function Display(props) {
  const { count , reset ,isMax } = props;
  
  const backgroundColor = isMax ? 'lightBlue' : '#d2d2d2';

  const styleDivcontainer = {
    background: backgroundColor,
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
      You count:
      <div style={styleDivScore}>{count}</div>
      <button onClick = {reset}>Reset</button>
    </div>
  );
}

///////////////////////////////             Counter              ///////////////////////////////

function Counter(props) {
  const { count , inc , reset , isMax} = props;

  return (
    <div>
      <Display count = {count} reset = {reset} isMax = {isMax}/>
      <button onClick={inc}>Click Me</button>
    </div>
  );
}


///////////////////////////////             CounterGroup              ///////////////////////////////

const CounterGroup = (props) => {
  const { countOfCounts } = props;
  const [ countsArray , setCountsArray] = useState(new Array(countOfCounts).fill(0));
  const maxValue = countsArray.reduce((acc, val)=> val > acc ? val : acc);;

  function inc(index , reset) {
      reset ? countsArray[index] = 0 : countsArray[index]++;
      setCountsArray([...countsArray]);
  }

  function createCounters() {
      const arrayOfCounters = [];
      for(let i = 0 ; i < countOfCounts ; i++) {
          arrayOfCounters.push(
            <Counter key = {i} count = {countsArray[i]} inc = {()=>{inc(i , false)}} reset = {()=>{inc(i , true)}}  isMax = {countsArray[i] === maxValue}/>
          );
      }
      return arrayOfCounters;
  }

  return (
    <div> 
        <p>The largest count is : {maxValue} </p>
        {createCounters()}
    </div>
  )
};


///////////////////////////////             main.js              ///////////////////////////////
const root = document.querySelector('main');
ReactDOM.render(<CounterGroup countOfCounts = {5} />, root);

























































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
*/

