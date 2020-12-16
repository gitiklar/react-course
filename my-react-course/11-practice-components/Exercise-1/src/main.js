import React from 'react';
import ReactDOM from 'react-dom';
import MultiInput from './multiInput.js';
import '../css/style.css';

function Header() {
    return(
        <>
            <h1>MultiInput - exercise 1</h1>
            <div className="inputsContainer">
                <MultiInput/>
            </div>
        </>
    )
}

ReactDOM.render(<Header/>, document.querySelector('main'));
