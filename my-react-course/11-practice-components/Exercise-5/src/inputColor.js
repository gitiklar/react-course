import React from 'react';

export default function InputColor(props) {
    const {color , updateColor} = props;
    
    function onChangeColorHandler(e) {
        const color = e.target.value;
        updateColor(color);
    }

    return (
        <label >
            <span>Choose a color:</span>
            <input type="color" value={color} onChange={onChangeColorHandler}/>
        </label>
    );
}