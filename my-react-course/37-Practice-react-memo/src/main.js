import React, { useRef } from "react";
import ReactDOM, { render } from "react-dom";
import { useState, useMemo, useCallback } from "react";

import "../styles/style.scss";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Header = React.memo(function Header(props) {
  console.count("Header.render");

  return <h1>My Counter Demo</h1>;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DisplayValue = React.memo(function DisplayValue(props) {
  console.count("DisplayValue.render");
  const { val } = props;
  return <p>Value: {val}</p>;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DisplayMod5 = React.memo(function DisplayMod5(props) {
  console.count("DisplayMod5.render");

  const { val } = props;
  const text =
    val % 5 === 0 ? "Value is divisible by 5" : "Value does not divide by 5";

  return <p>{text}</p>;
},(prevProps , nextProps)=>{
    return (prevProps.val % 5 === 0) === (nextProps.val % 5 === 0);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const MyButton = React.memo(function MyButton(props) {
  console.count("MyButton.render");
  return <button onClick={props.onClick}>Click Me</button>;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Counter() {
  console.count("Counter.render");
  const [nonce , setNonce] = useState(0);
  const countRef = useRef(0); const count = countRef.current;
  const deltaRef = useRef(1); const delta = deltaRef.current;

  const inc = useCallback(function inc() {
    countRef.current += deltaRef.current;
    render();
  },[countRef]);

  function render() {
    setNonce(v => v + 1);
  }

  return (
    <>
      <Header />
      <label>
        Increase by:
        <input type="number" 
              value={delta} 
              onChange={e => { deltaRef.current = Number(e.target.value); render();}} />
      </label>
      <DisplayValue val={count} />
      <DisplayMod5 val={count} />
      <MyButton onClick={inc} />
    </>
  );
}

ReactDOM.render(<Counter />, document.querySelector('main'));

// 1.)  Header render Once only

// 2.)  MyButton render Once only

// 3.)  On Input click
//    - render Counter only

// 4.)  On MyButton click
//    - render DisplayValue
//    - render DisplayMod5 if not changed only
