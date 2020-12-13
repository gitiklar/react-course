import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person.js';
import '../css/main.css';

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Person name="Gita"/>
            <Person name="Yossef"/>
        </div>
    )
};

const root = document.querySelector('main');
ReactDOM.render(<App />, root);