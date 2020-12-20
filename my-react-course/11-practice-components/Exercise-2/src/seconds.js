import React from 'react';

export default function Seconds (props) {
    const { seconds , updateTheTime } = props;

    function updateTime(e) {
        const value = Number(e.target.value);
        updateTheTime(value);
    }

    return (
        <label>
            <span>Seconds:</span>
            <input type="number" value = {seconds} onInput = {updateTime} />
        </label>
    );
}