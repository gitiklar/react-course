import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.css';
import GameCatchTheRed from './game-catch-the-red';

const App = ()=> {
    return (
        <GameCatchTheRed countOfSquers = {12}/>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));