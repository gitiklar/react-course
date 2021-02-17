import React from 'react';

import FormsContainer from './formsContainer';
import Login from './loginPage';
import Residence from './countryAndCitySelection';
import Hobbies from './hobbiesSelection';
import Summary from './summaryPage';

export default function FormsApp() {

    return (
        <FormsContainer>
            <Login/>
            <Residence/>
            <Hobbies/>
            <Summary/>
        </FormsContainer>
    );
}