import React, { useRef, useState, useEffect  } from 'react';

export default function InputFocusSwitch({count}) {
    const [rectanglesInnerText , setRectanglesInnerText] = useState({});
    const [currentFocusIndex , setCurrentFocusIndex] = useState(0);
    const refDivs = useRef(null);
    const style = {width: "25vw", height: "50vh", border:"1px solid blue", background: "lightblue",};

    function focus() { 
        refDivs.current.children[currentFocusIndex].focus(); 
    }
    // set initial focus when component mounts (componentDidMount) -> אפשר לוותר על השורה הבאה
    useEffect(() => focus(), []);
    // update focused element when component state changes (componentDidUpdate)
    useEffect(() => focus(), [currentFocusIndex]);

    function onKeyPressHandler(e , i) {
        rectanglesInnerText[i] = (rectanglesInnerText[i] || '') + e.key;
        setRectanglesInnerText({...rectanglesInnerText});
        setCurrentFocusIndex(i + 1 === count ? 0: i + 1);        
    }

    return (
        <div style={{display:"flex"}} ref = {refDivs}>
            {
                 (new Array(count)).fill(null).map((_, i) => (
                    <div key={i} style = {style} tabIndex = {1} onKeyPress = {(e)=>onKeyPressHandler(e , i)}> {rectanglesInnerText[i]} </div>
                ))
            }
        </div>
    );
}