import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import StarwarsCharacter from './starwarsCharacter';

const App = () => {
  const [id , setId] = useState(1);

  return (
    <div>
        <input type ="number" value={id} onChange={(e)=>setId(e.target.value)}/>
        <StarwarsCharacter id = {id}/>
    </div>
  );
}

ReactDOM.render(<App/> , document.querySelector('main'));