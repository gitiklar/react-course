import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/main.scss';
import InputFocusSwitch from './inputFocusSwitch';

const App = () => {
    return (
        <InputFocusSwitch count = {4}/>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));