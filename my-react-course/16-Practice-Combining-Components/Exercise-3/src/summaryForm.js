import React from 'react';

export default function SummaryForm({dataObjectOfAllPages}) {

    const { userName , password , country ,city } = dataObjectOfAllPages;

    const styleL = { display: "block" , fontSize: "2rem",};
    const center = { textAlign: "center",};
    const margin = { margin: "2rem",};
    
    return(
        <>
            <form>
                <h1>SummaryForm</h1>
                <h2 style={{...center , ...margin}}>Hi {userName}</h2>
                <label style={{...center , ...styleL}} className="form-label">Password: {password}</label>
                <label style={{...center , ...styleL}} className="form-label">Country: {country}</label>
                <label style={{...center , ...styleL}} className="form-label">City: {city}</label>
            </form>
        </>
    );
}