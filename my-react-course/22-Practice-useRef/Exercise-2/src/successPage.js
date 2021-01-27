import React from 'react';

export default function SuccessPage({formData , returnToForm}) {
    const {userName , password } = formData ;
    
    return(
        <>
            <>
                <h1>Hi {userName} You have successfully registered</h1>
                <h2>Your password is: {password}</h2>
                <button className="form-control btn btn-primary" onClick = {returnToForm}>previous</button>
            </>            
        </>
    );
}