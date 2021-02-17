import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav>
        <h1>Menu</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users/1/ttt/t">users/1</Link></li>
        <li><Link to="/users/2/ppp/p">users/2</Link></li>
        <li><Link to="/users/3/uuu/u">users/3</Link></li>
        <li><Link to="/topics">Topics</Link></li>

      </ul>
      <h1>-----------------------------</h1>
    </nav>

  );
}