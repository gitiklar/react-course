import React from 'react';

export default function Rectangle(props) {
    const { color } = props;

    const style = {
        backgroundColor : color,
    }

    return (
        <div className="rectangle" style = {style}></div>
    )
}