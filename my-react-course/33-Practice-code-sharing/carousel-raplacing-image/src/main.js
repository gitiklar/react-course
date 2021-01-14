import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/style.scss';
import Slider from './slider';
import imagesData from './imagesData';

const App = () => {
    return (
        <Slider imagesData = {imagesData}/>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));