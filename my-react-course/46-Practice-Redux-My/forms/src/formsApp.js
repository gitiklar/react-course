import React from 'react';

import FormsContainer from './formsContainer';
import LoginPage from './loginPage';
import CountryAndCitySelection from './countryAndCitySelection';
import HobbiesSelection from './hobbiesSelection';
import SummaryPage from './summaryPage';

export default function FormsApp() {

    return (
        <FormsContainer>
            <LoginPage/>
            <CountryAndCitySelection/>
            <HobbiesSelection/>
            <SummaryPage/>
        </FormsContainer>
    );
}