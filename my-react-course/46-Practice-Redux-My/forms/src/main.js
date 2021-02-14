import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import FormsApp from './formsApp';
import '../style/main.scss';

const App = () => {

    return (
        <Provider store = {store}>
            <FormsApp/>
        </Provider>
    );
};

ReactDOM.render(<App/> , document.querySelector('main'));