import React from 'react';
import ColourfulDiv from './colourfulDiv.js';
import { useState } from 'react';
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";

export default function App() {
    const defaultColor = "#F60EDB";
    const [bgColor , setBgColor] = useState(defaultColor);

    function colorChangeHandler(color) {
        setBgColor(color);
    }

    return (
        <>
            <h1>Choose a color - exercise 4</h1>
            <HexColorPicker color={bgColor} onChange={colorChangeHandler} />
            <ColourfulDiv bgColor = {bgColor}/>
        </>
    )
}