import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Menu from './menu';
import Home from './home';
import About from './about';
import Users from './users';
import Topics from './topics';


export default function App() {
  return (
    <Router>
        <Menu />
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/users/:id" component={Users}/>
        <Route path="/topics" component={Topics} />
    </Router>
  );
}

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
