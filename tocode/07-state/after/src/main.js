import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

const App = () => {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
};

const root = document.querySelector('main');
ReactDOM.render(<App />, root);
