import React from 'react';

export default function Input(props) {
    const {inputValue , inputEventHandler} = props;
    
    return (
        <label>
            <input type="text" placeholder="type something..." value = {inputValue} onInput = {inputEventHandler}/>
        </label>
    );
}