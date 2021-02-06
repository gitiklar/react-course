import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ChatApp from './chatApp';
import store from './redux/store';
import '../styles/main.scss';

const App = () => {
    return (
        <Provider store = {store}>
            <ChatApp/>
        </Provider>
    )
}

ReactDOM.render(<App/>, document.querySelector('main'));