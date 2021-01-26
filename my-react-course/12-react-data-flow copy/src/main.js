import React, { useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

///////////////////////////////             Display              ///////////////////////////
function Display({ count , reset , index}) {
  console.log('Display');
  
  const styleDivcontainer = { background: '#d2d2d2',  padding: '10px 2px',  boxShadow: '0 0 1px 1px rgba(0,0,0,0.6)', }
  const styleDivScore = {display: 'inline-block', background: 'black', color: 'white',  padding: '10px',  fontFamily: 'Orbitron, sans-serif', }

  return (
    <div style={styleDivcontainer}>
      You count:
      <div style={styleDivScore}>{count}</div>
      <button onClick = {()=>reset(index)}>Reset</button>
    </div>
  );
}
///////////////////////////////             Counter              ///////////////////////////
const Counter = React.memo(function Counter({ count , index , inc , reset}) {
  console.log(`Counter ${index}`);

  return (
    <div>
      <Display count = {count} reset = {reset} index = {index}/>
      <button onClick={()=>inc(index)}>Click Me</button>
    </div>
  );
})
///////////////////////////////             App              ///////////////////////////////
const CounterGroup = ({ countOfCounts }) => {
  console.log('CounterGroup');

  const countsArrayRef = useRef(new Array(countOfCounts).fill(0));
  const countsArray = countsArrayRef.current;
  const maxValue = countsArray.reduce((acc , val)=> val > acc ? val : acc);
  const [render , setRender] = useState(0);

  const inc = useCallback(function inc(index) {
    countsArray[index]++;
    setRender(v=>v+1);
  },[countsArrayRef]);

  const reset = useCallback(function reset(index) {
    countsArray[index] = 0;
    setRender(v=>v+1);
  },[countsArrayRef]);

  return (
    <div> 
        <p>The largest count is : {maxValue} </p>
        {new Array(countOfCounts).fill(0).map((_ , i)=>(
              <Counter key = {i} count = {countsArray[i]} index={i} inc = {inc} reset = {reset}/>
          ))}
    </div>
  )
};
///////////////////////////////             main.js              ///////////////////////////////
const root = document.querySelector('main');
ReactDOM.render(<CounterGroup countOfCounts = {5} />, root);
