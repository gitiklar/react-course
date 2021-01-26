import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import _ from "lodash"

function CheckableList({items}) {
  const [selectedItems , setSelectedItems] = useState(new Set());
  const [key , setKey] = useState(0);

  function unselectAll() {
    setKey(key => !key);
    setSelectedItems(new Set());
  }

  function handlerOnChange(add , item) {
    add && selectedItems.add(item);
    !add && selectedItems.delete(item);
    setSelectedItems(new Set(selectedItems));
  }

  return (
    <>
      <button onClick={unselectAll}>Unselect all</button>
      <p>{Array.from(selectedItems).join(',')}</p>
      <ul key={key}>
          {items.map(item =>(
            <li key={item}>
                <label>
                    {item}
                    <input type="checkbox" onChange={(e)=>handlerOnChange(e.target.checked , item)}/>
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