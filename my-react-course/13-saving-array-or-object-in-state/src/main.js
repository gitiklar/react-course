import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function SelectableList(props) {
  const { items } = props;
  const [selectedItems, setSelectedItems] = useState(new Set());

  function onChangeCheckHandler(add , item) {
      add && selectedItems.add(item);
      !add && selectedItems.delete(item);
      setSelectedItems(new Set(selectedItems));
  }
  
  return (
    <>
      <p> Selected items: {Array.from(selectedItems).join(' , ')} </p>
      <ul>
          {
            items.map(item => (
                  <li key = {item} style={{direction:"rtl"}}>
                      <label>
                          {item}
                          <input type ="checkbox" checked={selectedItems.has(item)} onChange = {(e)=>{onChangeCheckHandler(e.target.checked , item)}}></input>
                      </label>
                  </li>
                ))
            }
      </ul>
    </>
  );
}

const App = () => {
  const days = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <div>
      <SelectableList items={days}/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
