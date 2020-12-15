import React from 'react';

export default function NumbersBox(props) {
  const {delta , setDelta} = props;

  function hadndleInputChange(e) {
      setDelta(Number(e.target.value));
  }

  return(
    <label>
        Increase by: 
        <input type="number" value={delta} onChange={hadndleInputChange}></input>
    </label>
  );
}