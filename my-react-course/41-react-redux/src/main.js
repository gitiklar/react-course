import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Header from './header';
import Banner from './banner';
import Messages from './messages';
import InputMessage from './inputMessage';

import '../styles/main.scss';

const App = () => {
    return (
        <Provider store = {store}>
            <Header/>
            <Banner/>
            <Messages/>
            <InputMessage/>
        </Provider>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));