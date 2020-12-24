import React, { useState } from 'react';

export default function FormsManager({forms}) {
    const [currentIndexForm , setCurrentIndexForm] = useState(0);
    const [dataObjectOfAllPages , setDataObjectOfAllPages] = useState({});

    const CurrentForm = forms[currentIndexForm];
    const nextFormExist = forms[currentIndexForm + 1] ? true : false;
    const previousFormExist = forms[currentIndexForm - 1] ? true : false;

    function renderNextForm() {
        setCurrentIndexForm( i => i + 1);
    }

    function renderPreviousForm() {
        setCurrentIndexForm( i => i - 1);
    }

    function saveMyDataObj(dataObj) {
        setDataObjectOfAllPages({...dataObjectOfAllPages , ...dataObj});
    }

    return(
        <>
            <h1>Forms - Exercise 3</h1>
            <div className = "containerForFormAndButtons">
                <CurrentForm saveMyDataObj = {saveMyDataObj} dataObjectOfAllPages = {dataObjectOfAllPages}/>
                <div className="renderBtnsContainer">
                    { previousFormExist && <button onClick = {renderPreviousForm}>Previous</button> }
                    { nextFormExist && <button onClick={renderNextForm}>Next</button> }
                </div>
            </div>
        </>
    );
}