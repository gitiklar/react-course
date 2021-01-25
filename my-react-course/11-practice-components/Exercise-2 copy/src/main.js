import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import TimeUnit from './timeUnit';
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
                <TimeUnit seconds={seconds} updateTheTime = {updateTheTime} timeUnitName = "Day"     factor = {60 * 60 * 24}/>
                <TimeUnit seconds={seconds} updateTheTime = {updateTheTime} timeUnitName = "Hours"   factor = {60 * 60}/>
                <TimeUnit seconds={seconds} updateTheTime = {updateTheTime} timeUnitName = "Minuts"  factor = {60}/>
                <TimeUnit seconds={seconds} updateTheTime = {updateTheTime} timeUnitName = "Seconds" factor = {1}/>
            </div>
        </>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));