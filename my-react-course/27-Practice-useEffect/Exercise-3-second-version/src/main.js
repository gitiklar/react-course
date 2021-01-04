import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import StarWarsCharacter from './starWarsCharacter';
import '../styles/main.scss';

const InfoByID = () => {
    const [id , setId] = useState(1);

    return (
        <>  
            <div className="characterId">
                <input type="number" value={id} onChange={(e)=>setId(e.target.value)}/>
            </div>
            <StarWarsCharacter id={id}/>
        </>
    );
}

const App = () => {
    return (
        <InfoByID/>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));