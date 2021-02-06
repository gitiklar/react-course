import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Timer from './timer';
import ShowHideMessage from './showOrHideMessage';

import store from './redux/store';

const App = () => {
    return (
        <Provider store = {store}>
            <Timer/>
            <ShowHideMessage/>
        </Provider>
    );
};

ReactDOM.render(<App/> , document.querySelector('main'));