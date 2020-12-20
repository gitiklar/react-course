import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import Hours from './hours.js';
import Minutes from './minutes.js';
import Seconds from './seconds.js';
import '../css/style.css';

function App() {
    const [seconds , setSeconds] = useState(0);

    function updateTheTime(value) {
        setSeconds(value);
    }

    return (
        <>
            <h1>Convert time units</h1>
            <div className="convertTimeUnitsContainer">
                <Hours   seconds={seconds} updateTheTime = {updateTheTime}/>
                <Minutes seconds={seconds} updateTheTime = {updateTheTime}/>
                <Seconds seconds={seconds} updateTheTime = {updateTheTime}/>
            </div>
        </>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));