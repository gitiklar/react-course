import React from 'react';
import ReactDOM from 'react-dom';

import { FormsContainer } from './formsContainer';
import { Login } from './login';
import { CountryAndCity } from './countryAndCity';
import { Hobbies } from './hobbies';
import { Summary } from './summary';
import { Page1, Page2 } from './hello_container';
import '../styles/style.scss';

const App = () => {
  return (
    <>
      <div>
          <FormsContainer>
                <Login/>
                <CountryAndCity/>
                <Hobbies/>
                <Summary/>
          </FormsContainer>
      </div>

      <div style={{marginTop:"20rem"}}>
          <Page1/>
          <Page2/>
      </div>
    </>
  );
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
