```JS
1-6 , 9 (class) Person                      Component
7-8             Counter                     Component
11/1            SynchronizedTextBoxes       Component
11/2            TimeInitConverter           Component
11/3            GuessingNumberGame          Component
11/4            ChooseColor                 Component
11/5            ChooseColors                Component
12              CounterDisplayMax           Component
13              SelectableList              Component
14              CounterDisplayMaxColor      Component
15              SelectedCountryAndCity      Component - Genery by component 'SelectedOptions' | Not genery
16/1            CatchTheRedGame             Component
16/2            FilterItemsFromAList        Component
16/3            FormWithThreePages          Component
17              CheckableList               Component - List and key
18              CheckableListWithDelete     Component - List and key
19              SortableTable               Component - With custom hook | Without
21              MultiSelectAndDeleteList    Component - With useRef
22/1            InputFocusSwitch            Component - With useRef
22/2            FormsWithConfirmPassword    Component - With useRef | With useState
23              Title                       Component - With useEffect
24              Timer                       Component - With useEffect
25              starwarsWithServerAPI       Component - With useEffect
26              youtubeAPI                  Component - With useEffect & useRef
27/1            ViemoPlayerAPI              Component - With useEffect & useRef
27/2            filmsWithServerAPI          Component - With useEffect
27/3            starwarsAndFilmsTogether    Component - With useEffect with useRemoteData Custom hook
28              classComponentLifecycle     Component - 01_component_will_unmount - clear Timer
                                                        02_component_did_mount - flatpickr()
                                                        03_get_derived_state_from_props - TextBox
                                                        04_component_did_update - onYouTubeIframeAPI
                                                        05_component_did_catch - Bomb
-----------------------  Code-sharing-between-components  -----------------------
29              useTimer,useInterval        Component - With custom hook
30              WithClock                   Component - With Higher order component
31              FilteredList,CheckableList  Component - With render props
32              FormsContainerWith4Pages    Component - With react children
33/1            Carousel * 4 versions       Component - With react children
33/2            useRemoteData * 2 versions  Component - With custom hook
----------------------------------------------------------------------------------
```
# Reduce renders using React.memo:
example:
-
main.js
-
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import Fiver from './fiver';
import ColorPalette from './colors';


function ColorSelector(props) {
  console.log('Color Selector');
  const [ticks, setTicks] = useState(0);
  const [color, setColor] = useState('#000000');

  useEffect(function() {
    if (ticks % 7 === 0) {
      setColor('#000000');
    }
  }, [ticks]);

  return (
    <div>
      <div>
        <Fiver ticks={ticks} />
        <button onClick={() => setTicks(v => v + 1)}>Click Me ... {ticks}</button>
        <div>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value) } />
        </div>
      </div>
      <ColorPalette start={color} />
    </div>
  );
}

ReactDOM.render(<ColorSelector/>, document.querySelector('main'));

```
fiver.js
-
```JS
import React from 'react';

export default React.memo(function Fiver(props) {
  console.log('Fiver');
  const { ticks } = props;

  return (
    <p>{Math.floor(ticks / 5)}</p>
  );
},
  function(prevProps, nextProps) {
    return (Math.floor(prevProps.ticks / 5) === Math.floor(nextProps.ticks / 5));
  });

```
colors.js
-
```JS
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
    setCount(v=>v+1);
  },[deletedBoxesRef]);

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
});
```