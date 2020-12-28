import React, { useRef, useState, useEffect  } from 'react';

export default function InputFocusSwitch({count}) {
    const [rectanglesInnerText , setRectanglesInnerText] = useState({});
    const [currentFocusIndex , setCurrentFocusIndex] = useState(0);
    const refDivs = useRef(null);
    const style = {width: "25vw", height: "50vh", border:"1px solid blue", background: "lightblue",};

    function focus() { 
        refDivs.current.children[currentFocusIndex].focus(); 
    }
    useEffect(() => focus(),[]);
    useEffect(() => focus());

    function onKeyPressHandler(e , i) {
        rectanglesInnerText[i] = (rectanglesInnerText[i] || '') + e.key;
        setRectanglesInnerText({...rectanglesInnerText});
        if(e.key === ' ') {
            setCurrentFocusIndex(i + 1 === count ? 0: i + 1);
        }
        
    }

    return (
        <div style={{display:"flex"}} ref = {refDivs}>
            {
                (()=>{
                    const arr = [];
                    for (let i = 0 ; i < count ; i++) {
                        arr.push(
                            <div key={i} style = {style} tabIndex = {1} onKeyPress = {(e)=>onKeyPressHandler(e , i)}> {rectanglesInnerText[i]} </div>
                        )
                    }   
                    return arr;
                })()
            }
        </div>
    );
}