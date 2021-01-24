import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import imagesData from './imagesData';

const App = () => {
    return (
        <>
            <h1 style={{textAlign:"center"}}>Carousel</h1>
            <div style={{width:"50vw" , margin:"auto"}}>
                <Carousel>
                    {
                        Object.keys(imagesData).map((imgKey , index)=>(
                            <div key={imgKey}>
                                <img key={imgKey} src={imagesData[imgKey].src} alt={imagesData[imgKey].alt}/>
                                <p className="legend">Legend {index}</p>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));