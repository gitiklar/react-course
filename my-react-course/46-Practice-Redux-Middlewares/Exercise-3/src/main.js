import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Form from './form';
import '../styles/main.scss';

const App = () => {
    return (
        <Provider store = {store}>
           <Form/>
        </Provider>
    );
};

ReactDOM.render(<App/> , document.querySelector('main'));