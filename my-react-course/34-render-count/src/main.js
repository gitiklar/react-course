import React from 'react';
import ReactDOM from 'react-dom';
import tinycolor from 'tinycolor2';
import { useState } from 'react';

function Counter() {
  console.log('Counter');
  const [ticks, setTicks] = useState(0);
  return (
    <button onClick={() => setTicks(v => v + 1)}>Click Me ... {ticks}</button>
  );
}

function ColorBox(props) {
  console.log('ColorBox');
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
}

function ColorPalette(props) {
  console.log('ColorPalette');
  const { start } = props;
  const [deletedBoxes, setDeletedBoxes] = useState(new Set());

  function removeBox(e) {
    const id = e.target.dataset.id;
    deletedBoxes.add(Number(id));
    setDeletedBoxes(new Set(deletedBoxes));
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
  return colors;
}

function ColorSelector(props) {
  console.log('ColorSelector');
  const [color, setColor] = useState('#000000');

  return (
    <div>
      <div>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value) } />
      </div>
      <ColorPalette start={color} />
    </div>
  );
}

const App = () => {
  console.log('App');
  return (
    <div>
      <Counter/>
      <ColorSelector/>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('main'));

