import React from 'react';
import Counter from './counter.js';
import NumbersBox from './numbersBox.js';
import { useState } from 'react';

export default function App() {
  const [delta , setDelta] = useState(1);

  return (
    <>
        <NumbersBox delta={delta} setDelta={setDelta}/>
        <Counter delta={delta} value={1} setDelta={setDelta}/>
        <Counter delta={delta} value={2} setDelta={setDelta}/>
        <Counter delta={delta} value={3} setDelta={setDelta}/>
        <Counter delta={delta} value={4} setDelta={setDelta}/>
        <Counter delta={delta} value={5} setDelta={setDelta}/>
    </>
  );
}