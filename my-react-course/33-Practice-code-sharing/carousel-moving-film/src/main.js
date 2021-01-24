import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from './carousel';
import imagesData from './imagesData';

const App = () => {
    return (
        <>
            <h1 style={{textAlign:"center"}}>Carousel</h1>
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

ReactDOM.render(<App/> , document.querySelector('main'));