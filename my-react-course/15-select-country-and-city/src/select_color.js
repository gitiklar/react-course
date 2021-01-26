import React from 'react';
import { useState } from 'react';

export default function SelectColor(props) {
  const colors = ['red', 'blue', 'yellow', 'green'];
  const [ color, setColor ] = useState(null);

  return (
    <>
      <p>Selected Color: {color}</p>

      <select value={color||'default'} onChange={(e) => setColor(e.target.value)}>
        <option disabled value="default">Please select a color</option>
        {colors.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
      </select>
    </>
  );
}