import React from 'react';

export default function TimeUnit(props) {
    const { seconds , updateTheTime , timeUnitName , factor} = props;
    const inputValue = seconds / factor;

    function updateTime(e) {
        const value = Number(e.target.value) * factor;
        updateTheTime(value);
    }

    return (
        <label>
            <span>{timeUnitName}:</span>
            <input type="number" value = {inputValue} onInput = {updateTime} />
        </label>
    );
}