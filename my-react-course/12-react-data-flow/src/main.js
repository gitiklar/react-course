
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

///////////////////////////////             Display              ///////////////////////////////

function Display({ count , reset }) {
  const styleDivcontainer = { background: '#d2d2d2',  padding: '10px 2px',  boxShadow: '0 0 1px 1px rgba(0,0,0,0.6)', }
  const styleDivScore = {display: 'inline-block', background: 'black', color: 'white',  padding: '10px',  fontFamily: 'Orbitron, sans-serif', }

  return (
    <div style={styleDivcontainer}>
      You count:
      <div style={styleDivScore}>{count}</div>
      <button onClick = {reset}>Reset</button>
    </div>
  );
}
///////////////////////////////             Counter              ///////////////////////////
function Counter(props) {
  const { count , inc , reset } = props;

  return (
    <div>
      <Display count = {count} reset = {reset}/>
      <button onClick={inc}>Click Me</button>
    </div>
  );
}
///////////////////////////////             App              ///////////////////////////////
const CounterGroup = ({ countOfCounts }) => {
  const [ countsArray , setCountsArray] = useState(new Array(countOfCounts).fill(0));
  const maxValue = countsArray.reduce((acc , val)=> val > acc ? val : acc);

  function updateCount(index , reset) {
      reset ? countsArray[index] = 0 : countsArray[index]++ ;
      setCountsArray([...countsArray]);
  }

  return (
    <div> 
        <p>The largest count is : {maxValue} </p>
        {new Array(countOfCounts).fill(0).map((_ , i)=>(
              <Counter key = {i} count = {countsArray[i]} inc = {()=>{updateCount(i , false)}} reset = {()=>{updateCount(i , true)}}/>
          ))}
    </div>
  )
};
///////////////////////////////             main.js              ///////////////////////////////
const root = document.querySelector('main');
ReactDOM.render(<CounterGroup countOfCounts = {5} />, root);
