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

  function deleteSelected() {
      setVisibleItems([...ulRef.current.querySelectorAll('input:not(:checked)')].map(inp => inp.nextSibling.textContent));
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
