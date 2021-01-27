
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import '../styles/main.scss';
import FormUseState from './formUseState';
import FormUseRef from './formUseRef';
import SuccessPage from './successPage';

const App = () => {
    const [formData , updateFormData] = useState({});
    const [showSuccessPage , setShowSuccessPage] = useState(false);

    function updateData(e) {
        formData[e.target.id] = e.target.value;
        updateFormData({...formData});
    }
    //updateData for FormUseRef
    /*
    function updateData(formData) {
        updateFormData(formData);
    }
    */
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
               {!showSuccessPage && <FormUseState updateData = {updateData} showSuccessPageHandler = {showSuccessPageHandler} formData={formData}/>}
               {showSuccessPage  && <SuccessPage formData = {formData} returnToForm = {returnToForm}/> }
             </>
            }            
        </>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));