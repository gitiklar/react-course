import React from 'react';

export default function Hours(props) {
    const { seconds , updateTheTime } = props;
    const factor = 60 * 60;
    const hours = seconds / factor;

    function updateTime(e) {
        const value = Number(e.target.value) * factor;
        updateTheTime(value);
    }

    return (
        <label>
            <span>Hours:</span>
            <input type="number" value = {hours} onInput = {updateTime} />
        </label>
    );
}