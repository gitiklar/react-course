import React from 'react';
import Carousel from './carousel';

export default function Slider({imagesData}) {
    return(
        <>
            <h1>Carousel</h1>
            <Carousel>
                {
                    Object.keys(imagesData).map(imgKey=>(
                        <img key={imgKey} src={imagesData[imgKey].src} alt={imagesData[imgKey].alt}/>
                    ))
                }
            </Carousel>
        </>
    );
}