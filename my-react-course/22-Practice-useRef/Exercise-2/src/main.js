import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import '../styles/main.scss';
import FormUseState from './formUseState';
import SuccessPage from './successPage';

const App = () => {
    const [formData , updateFormData] = useState({});
    const [showSuccessPage , setShowSuccessPage] = useState(false);

    function updateData(e) {
        formData[e.target.id] = e.target.value;
        updateFormData({...formData});
    }

    function showSuccessPageHandler() {
        setShowSuccessPage(true);
    }

    function returnToForm() {
        setShowSuccessPage(false);
    }

    return (
        <>
            { 
             <>
               <FormUseState updateData = {updateData} showSuccessPageHandler = {showSuccessPageHandler} formData={formData} showSuccessPage={showSuccessPage}/>
               <SuccessPage formData = {formData} returnToForm = {returnToForm} showSuccessPage={showSuccessPage}/>
             </>
            }            
        </>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));













/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import '../styles/main.scss';
import FormUseRef from './formUseRef';
import SuccessPage from './successPage';

const App = () => {
    const [formData , updateFormData] = useState({});
    const [showSuccessPage , setShowSuccessPage] = useState(false);

    function updateData(formData) {
        updateFormData(formData);
    }

    function showSuccessPageHandler() {
        setShowSuccessPage(true);
    }

    function returnToForm() {
        setShowSuccessPage(false);
    }

    return (
        <>
            { 
             <>
               <FormUseRef updateData = {updateData} showSuccessPageHandler = {showSuccessPageHandler} formData={formData} showSuccessPage={showSuccessPage}/>
               <SuccessPage formData = {formData} returnToForm = {returnToForm} showSuccessPage={showSuccessPage}/>
             </>
            }            
        </>
    );
}
ReactDOM.render(<App/> , document.querySelector('main'));
*/