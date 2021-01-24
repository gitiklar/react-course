import React from 'react';
import ReactDOM from 'react-dom';
import StarwarsCharacters from './starwarsCharacters';

const App = () => {
    return (
        <>
            <h1>Star wars character</h1>
            <StarwarsCharacters/>
        </>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));