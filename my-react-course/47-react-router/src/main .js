import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";

import Menu from './menu';
import About from './about';
import Users from './users';
import Home from './home';


const App = () => {

  return (
      <Router>
          <Menu />
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/users" component={Users}/>
      </Router>
  );
  //Old version
  /*
  return (
    <Router>
        <Menu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
  */
}

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
