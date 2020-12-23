import React from 'react';
import { useState } from 'react';

export default function TextBoxToFilter(props) {
    const { updateFilter } = props;
    const [currentValue , setcurrentValue] = useState('');

    function handlerInputChange(e) {
        setcurrentValue(e.target.value);
    }

    return (
        <div className = "textBoxToFilter">
            <label>
                Write a text / regexp to filter:
                <input type= "text" onInput = {handlerInputChange}/>
            </label>
            <button className="ok btn btn-secondary btn-lg" onClick={()=>{updateFilter(currentValue)}}>OK</button>
        </div>
    )
}