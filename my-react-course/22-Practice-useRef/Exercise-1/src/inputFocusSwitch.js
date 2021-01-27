import React, { useRef, useState, useEffect  } from 'react';

export default function InputFocusSwitch({count}) {
    const [rectanglesInnerText , setRectanglesInnerText] = useState(new Array(count).fill(''));
    const [currentFocusIndex , setCurrentFocusIndex] = useState([0]); //Array is for : if current num is equal to previous num so render by new array.
    
    const refDivs = useRef(null);
    const style = {width: "25vw", height: "50vh", border:"1px solid blue", background: "lightblue",};

    useEffect(()=>{
        refDivs.current.children[currentFocusIndex[0]].focus();
    }, [currentFocusIndex]);

    function onKeyPressHandler(e , i) {
        rectanglesInnerText[i] = rectanglesInnerText[i] + e.key;
        setRectanglesInnerText([...rectanglesInnerText]);
        setCurrentFocusIndex([i + 1 === count ? 0: i + 1]);   
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