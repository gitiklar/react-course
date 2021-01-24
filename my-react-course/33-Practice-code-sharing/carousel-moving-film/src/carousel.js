import React, { useRef, useState } from 'react';
import useClockActivatesFunction  from './useClock';

export default function Carousel(props) {
    const [left , setLeft] = useState(0);
    useClockActivatesFunction(5000 , updateNextLeft);

    const imagesCount = React.Children.count(props.children);
    const imageClass = useRef('');
    const imgWidth = 1000;

    function updateNextLeft() {
        imageClass.current = 'animate__animated animate__slideInRight';
        setLeft(v => v === (imgWidth * (imagesCount-1) * -1) ? 0 : v - imgWidth);
    }

    function updatePreviousLeft() {
        imageClass.current = 'animate__animated animate__slideInLeft';
        setLeft(v => v === 0 ? (imgWidth * (imagesCount-1) * -1) : v + imgWidth);
    }

    const btnStyle = {width:"50%" , backgroundColor:"#5050da" , color:"white"};
    const meshStyle = {width:`${imgWidth}px`, height:"400px" , position:"relative" , marginLeft: "calc(50vw - 500px)" , overflow:"hidden" , backgroundColor:"black"};
    const filmStyle = {width:"999999px" , height:"400px" , position:"absolute" , left:`${left}px`};
    const imageStyle = {width:`${imgWidth}px` , height:"400px"};    

    return (
        <>
            <div style={meshStyle}> 
                <div style={filmStyle}>
                    {props.children.map((child , index)=>
                        React.cloneElement(child , {style : imageStyle , className: index === (left / (imgWidth*-1)) ? imageClass.current : ''})
                    )}
                </div>
            </div>
            <div style={{width:`${imgWidth}px` , margin:"auto"}}>
                <button style={btnStyle} onClick={()=>updatePreviousLeft()}>Previous</button>
                <button style={btnStyle} onClick={()=>updateNextLeft()}>Next</button>
            </div>
        </>
    );
}