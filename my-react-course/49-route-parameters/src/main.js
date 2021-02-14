import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";

import Menu from './menu';
import Home from './home';
import About from './about';
import Users from './users';


export default function App() {
  return (
    <Router>
        <Menu />
        <Route path="/about" component={About}/>
        <Route path="/users/:id" component={Users}/>
        <Route path="/" exact component={Home}/>
    </Router>
  );
}

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
