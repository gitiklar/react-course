import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, } from "react-router-dom";

import Flash from './flash';
import Login from './login';
import User from './user';
import store from './redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <Router>
            <Flash/>
            <Route path="/" exact component = {Login}/>
            <Route path="/user" component= {User} />
      </Router>
    </Provider>
  );
}

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
