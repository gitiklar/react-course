import React from 'react';

export default function ColourfulDiv(props) {
    const { bgColor } = props;

    const style = {
        backgroundColor: bgColor,
    }

    return (
        <div className = "colourfulDiv" style = {style}></div>
    )
}