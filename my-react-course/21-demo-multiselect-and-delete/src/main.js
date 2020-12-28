import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useRef } from 'react';

import '../styles/main.scss';

const MultiSelectAndDeleteList = (props) => {
  const { items } = props;
  const [ visibleItems, setVisibleItems ] = useState(items);  
  const ulRef = useRef(null);

  function reset() {
    setVisibleItems(items);
  }

  function deleteSelected3() {
    const selectedInputs = ulRef.current.querySelectorAll('input:checked');
    const selectedItems = Array.from(selectedInputs).map(inp => inp.parentElement.textContent);
    setVisibleItems(v => v.filter(x => !selectedItems.includes(x)));
  }

  function deleteSelected() {
    setVisibleItems([...ulRef.current.querySelectorAll('input:not(:checked)')].map(inp => inp.parentElement.textContent));
  }

  function deleteSelected2() {
    const labels = ulRef.current.querySelectorAll('label');
    const visibleItems = [];
    for (let label of labels) {
        if(label.querySelector('input').checked === false) {
            visibleItems.push(label.textContent);
        }
    }
    setVisibleItems(visibleItems);
  }

  function deleteSelected1() {
    const notSelectedItems = [];
    for (let li of ulRef.current.children) {
      const label = li.children[0];
      const input = label.children[0];
      input.checked === false && notSelectedItems.push(label.textContent);
    }
    setVisibleItems(notSelectedItems);
  }

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={deleteSelected}>Delete</button>
      <ul ref = {ulRef}>
        {visibleItems.map(item => (
          <li key={item} >
            <label>
              <input type="checkbox" />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );

}


const App = () => {
  const items = ['one', 'two', 'three', 'four', 'five'];
  return (
    <div>
      <MultiSelectAndDeleteList items={items} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
