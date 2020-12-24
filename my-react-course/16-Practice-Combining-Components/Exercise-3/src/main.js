import React from 'react';
import ReactDOM from 'react-dom';

import FormsManager from './formsManager';
import LoginForm from './loginForm';
import CitiAndCountryForm from './cityAndCountryForm';
import SummaryForm from './summaryForm';

import '../css/style.css';

const App = () => {
    const forms = [LoginForm , CitiAndCountryForm ,  SummaryForm];
    return (
        <FormsManager forms = {forms}/>
    );
}


ReactDOM.render(<App/> , document.querySelector('main'));