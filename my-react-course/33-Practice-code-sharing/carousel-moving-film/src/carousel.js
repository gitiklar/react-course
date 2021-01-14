import React, { useState } from 'react';
import useClock from './useClock';

export default function Carousel(props) {
    const imagesCount = props.children.length;
    const [imageIndex , setImageIndex] = useClock(3000);
    const imageClassName = 'animate__animated animate__slideInLeft';

    function getCurrentImage() {
        const currentChild = React.Children.toArray(props.children)[imageIndex % imagesCount];
        return React.cloneElement(currentChild , {className:imageClassName});
    }

    return (
        <> 
            {getCurrentImage()}
            <div className="buttonsContainer">
                <button className="btn btn-primary" onClick={()=>setImageIndex(v => v === 0 ? imagesCount - 1 : v - 1)}>Previous</button>
                <button className="btn btn-primary" onClick={()=>setImageIndex(v => v + 1)}>Next</button>
            </div>
        </>
    );
}