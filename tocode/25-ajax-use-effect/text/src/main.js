import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { useState, useEffect } from 'react';

function StarwarsCharacter(props) {
  const [data, setData] = useState({});
  const { id } = props;

  useEffect(function() {
    const xhr = $.getJSON(`https://swapi.co/api/people/${id}/`, function success(data) {
      setData(data);
    });

    return function cancel() {
      setData({ id });
      xhr.abort();
    }
  }, [id]);
  
  return (
    <div>
      <p><b>Name:</b> {data.name}</p>
      <p><b>Hair Color:</b> {data.hair_color}</p>
    </div>
  );
}

const App = () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <StarwarsCharacter id={id} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
