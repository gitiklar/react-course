import React from 'react';

export default function CitiAndCountryForm({saveMyDataObj , dataObjectOfAllPages}) {

    const country = dataObjectOfAllPages["country"] || '';
    const city = dataObjectOfAllPages["city"] || '';
    const myDataObj = {};

    function onInputHandler(e) {
        e.target.id === "country" && (myDataObj["country"] = e.target.value);
        e.target.id === "city" && (myDataObj["city"] = e.target.value);
        saveMyDataObj(myDataObj);
    }

    return(
        <>
            <form>
                <h1>CitiAndCountryForm</h1>
                <div className="form-outline mb-4">
                    <input type="text" id="country" className="form-control" value={country} onInput = {onInputHandler}/>
                    <label className="form-label" htmlFor="country">Country</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" id="city" className="form-control" value={city} onInput = {onInputHandler}/>
                    <label className="form-label" htmlFor="city">City</label>
                </div>
            </form>
        </>
    );
}