import React from 'react';
import { useState } from 'react';
import InputColor from './inputColor.js';
import SomeRectangles from './someRectangles.js';

export default function ColorSelection() {
    const defaultColor = "#ff0000";
    const [color , setColor] = useState(defaultColor);
    const countOfRectangles = 11;

    function updateColor(color) {
        setColor(color);
    }

    const props = {
        color,
        updateColor,
        countOfRectangles,
    }


    return (
        <>
            <h1>Color selection - exercise 5</h1>
            <InputColor {...props}/>
            <SomeRectangles {...props}/>
        </>
    );
}