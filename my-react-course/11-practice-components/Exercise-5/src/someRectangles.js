import React from 'react';
import Rectangle from './rectangle.js';
import tinycolor from 'tinycolor2';

export default function someRectangles(props) {
    let {color ,countOfRectangles } = props;
    const multiply = 90/countOfRectangles;
    const calcMiddle = (countOfRectangles-1)/2;

    function createRectangleWithColor(i) {
        let colorAfterTinyColor = i <=calcMiddle ? tinycolor(color).lighten((calcMiddle - i) * multiply).toString() : tinycolor(color).darken((i - calcMiddle) * multiply).toString();
        return (<Rectangle key={i} color = {colorAfterTinyColor}/>);
    }

    function divesArray() {
        let dives = [];
        for (let i = 0 ; i < countOfRectangles; i ++) {
            dives.push(createRectangleWithColor(i));           
        }
        return dives;
    }

    return (
        <div className="someRectanglesContainer">
           {divesArray()}
        </div>
    );
}