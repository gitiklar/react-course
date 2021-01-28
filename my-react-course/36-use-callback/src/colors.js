
import React from 'react';
import { useState } from 'react';
import tinycolor from 'tinycolor2';

const ColorBox = React.memo(function ColorBox(props) {
  console.log('Color Box');
  const { start, spin, onClick, id } = props;
  const color = tinycolor(start).spin(spin).toString();

  return (
    <div
      onClick={onClick}
      data-id={id}
      style={{
        width: '100px',
        height: '100px',
        background: color,
        display: 'inline-block',
        margin: '5px',
      }} >{id}</div>
  );
},(prevProps , nexpProps)=>{
  return prevProps.start === nexpProps.start;
});

export default React.memo(function ColorPalette(props) {
  console.log('Color Palette');
  const { start } = props;
  const [deletedBoxes, setDeletedBoxes] = useState(new Set());

  function removeBox(e) {
    const id = e.target.dataset.id;
    deletedBoxes.add(Number(id));
    setDeletedBoxes(new Set(deletedBoxes));
  }

  function deleteRandomBox() {
    const boxId = (Math.floor(Math.random() * 10) + 1) * 50;
    alert(boxId);
    deletedBoxes.add(boxId);
    setDeletedBoxes(new Set(deletedBoxes));
  }

  const colors = [];
  for (let i=50; i <=500 ; i+=50) {
    if (deletedBoxes.has(i)) continue;

    colors.push(
      <ColorBox
        key={i}
        start={start}
        spin={i}
        onClick={removeBox}
        id={i}
      />
    );
  }

  return (
    <div>
      <p>
        <button onClick={deleteRandomBox}>Delete a random box</button>
      </p>
      {colors}
    </div>
  );
});
/*

import React, { useCallback, useRef } from 'react';
import { useState } from 'react';
import tinycolor from 'tinycolor2';

const ColorBox = React.memo(function ColorBox(props) {
  console.log('Color Box');
  const { start, spin, onClick, id } = props;
  const color = tinycolor(start).spin(spin).toString();

  return (
    <div
      onClick={onClick}
      data-id={id}
      style={{
        width: '100px',
        height: '100px',
        background: color,

        display: 'inline-block',
        margin: '5px',
      }} >{id}</div>
  );
});

export default React.memo(function ColorPalette(props) {
  console.log('Color Palette');
  const { start } = props;
  const deletedBoxesRef = useRef(new Set());
  const deletedBoxes = deletedBoxesRef.current;
  const [count , setCount] = useState(0);

  const removeBox = useCallback(function removeBox(e) {
    const id = e.target.dataset.id;
    deletedBoxes.add(Number(id));
    setCount(v => v + 1);
  },[deletedBoxes]);

  
  function deleteRandomBox() {
    const boxId = Math.floor(Math.random() * 720) -360;
    alert(boxId);
    deletedBoxes.add(boxId);
    setCount(v => v + 1);
  }

  const colors = [];
  for (let i=-360; i < 360; i++) {
    if (deletedBoxes.has(i)) continue;

    colors.push(
      <ColorBox
        key={i}
        start={start}
        spin={i}
        onClick={removeBox}
        id={i}
      />
    );
  }

  return (
    <div>
      <p>
        <button onClick={deleteRandomBox}>Delete a random box</button>
      </p>
      {colors}
    </div>
  );
});
*/