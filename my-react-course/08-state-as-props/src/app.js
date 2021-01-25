import React from 'react';
import Counter from './counter.js';
import NumbersBox from './numbersBox.js';
import { useState } from 'react';

export default function App() {
  const [delta , setDelta] = useState(1);

  return (
    <>
        <NumbersBox delta={delta} setDelta={setDelta}/>
        <Counter delta={delta} maxValue={10} setDelta={setDelta}/>
        <Counter delta={delta} maxValue={20} setDelta={setDelta}/>
        <Counter delta={delta} maxValue={30} setDelta={setDelta}/>
        <Counter delta={delta} maxValue={40} setDelta={setDelta}/>
        <Counter delta={delta} maxValue={50} setDelta={setDelta}/>
    </>
  );
}