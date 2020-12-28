import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/main.scss';
import FormUseState from './formUseState';
import FormUseRef from './formUseRef';

const App = () => {
    return (
        <>
            <FormUseState/>
            <FormUseRef/>
        </>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));