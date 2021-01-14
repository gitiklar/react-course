import React from 'react';
import ReactDOM from 'react-dom';

import { MyFormsContainer } from './myFormsContainer';
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
          <MyFormsContainer>
                <Login/>
                <CountryAndCity/>
                <Hobbies/>
                <Summary/>
          </MyFormsContainer>
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
