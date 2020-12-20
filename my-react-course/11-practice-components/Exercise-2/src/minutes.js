import React from 'react';

export default function Minutes(props) {
    const { seconds , updateTheTime } = props;
    const factor = 60;
    const minutes = seconds / factor;

    function updateTime(e) {
        const value = Number(e.target.value) * factor;
        updateTheTime(value);
    }

    return (
        <label>
            <span>Minutes:</span>
            <input type="number" value = {minutes} onInput = {updateTime} />
        </label>
    );
}