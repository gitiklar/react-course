import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import _ from "lodash"

// Without key
function CheckableListOld({items}) {
  const [selected , setSelected] = useState(new Set());

  function handlerOnChange(add , item) {
    add && setSelected(new Set(selected.add(item)));
    !add && setSelected(new Set(selected.delete(item)));
  }

  return (
      <ul>
          {items.map(item =>(
            <li>
                <label>
                    {item}
                    <input type="checkbox" checked={selected.has(item)} onChange={(e)=>{handlerOnChange(e.target.checked , item)}}/>
                </label>
            </li>
            )
          )}
      </ul>
  );
}

function CheckableList({items}) {
  
  const [keyUl , setKeyUl] = useState(0);

  function reset() {
    setKeyUl(keyUl => !keyUl);
  }

  return (
    <>
      <button onClick={reset}>Reset</button>
      <ul key={keyUl}>
          {items.map(item =>(
            <li key={item}>
                <label>
                    {item}
                    <input type="checkbox"/>
                </label>
            </li>
            )
          )}
      </ul>
    </>
);
}


const App = () => {
  const [items, setItems] = useState(['one', 'two', 'three', 'four', 'five' ,'six' , 'seven' , 'height' , 'nine' , 'ten']);

  function shuffleItems() {
    setItems(_.shuffle(items));
  }

  return (
    <div>
      <button onClick={shuffleItems}>Shuffle</button>
      <CheckableList items={items}/>
    </div>
  );
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
