import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";

function SelectableList({ items , reset}) {
  const [selectedItems , setSelectedItems] = useState([]);
  const [showItems , setShowItems] = useState(items);
  

  function updateSelectedItem(add , item) {
    add  && setSelectedItems([...selectedItems , item]);
    !add && setSelectedItems(selectedItems.filter(i=> i !== item))
  }

  function deleteSelectedItemsFromShowItems() {
    setShowItems(items.filter(item => !selectedItems.includes(item)));
  }

  return (
    <>
      <button onClick = {deleteSelectedItemsFromShowItems}>Delete</button>
      <button onClick = {reset}>Reset</button>

      <ul>
        {showItems.map(item => (
          <li key={item}>
            <label>
              <input type="checkbox" checked={selectedItems.includes(item)}  onChange = { (e)=>updateSelectedItem(e.target.checked , item)}/>
              {item}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}


const App = () => {
  const items = ['one', 'two', 'three', 'four', 'five' , 'six' , 'seven' , 'height' , 'nine' , 'ten'];
  const [keyS , setKey] = useState(0);
  
  function reset() {
    setKey(keyS=> !keyS);
  }

  return (
    <div>
      <SelectableList key = {keyS} items={items} reset={reset}/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
