import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <div><a href='/'>Home(a)</a></div>
          </li>
          <li>
            <Link to="/about">About</Link>
            <div><a href='/about'>About(a)</a></div>
          </li>
          <li>
            <Link to="/users">Users</Link>
            <div><a href='/users'>Users(a)</a></div>
          </li>
        </ul>
    </nav>
    );
  }