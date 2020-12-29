import React, { useState , useRef, useEffect } from 'react';

export default function FormUseRef({updateData , showSuccessPageHandler , formData, showSuccessPage}) {
    if (showSuccessPage) return false;
    const formRef = useRef(null);
    const [displayAlert , setDispalyAlert] = useState("none");
    const alertStyle = { textAlign:"center", borderColor: "#a3c6f8", display : displayAlert,};

    useEffect(() => {
        for(let key of Object.keys(formData)) {
            formRef.current.querySelector(`input#${key}`).value = formData[key] || '';
        }
    },[formData]);  

    function passwordIsGood(data) {
        return data.password === data.confirmPassword;
    }

    function loginHandler() {
        const allInputs = formRef.current.querySelectorAll('input:not([type="button"])');
        const data = {};
        Array.from(allInputs).forEach(inp=> data[inp.id] = inp.value);
        passwordIsGood(data) && (setDispalyAlert("none") , showSuccessPageHandler());
        !passwordIsGood(data) && setDispalyAlert("block");
        updateData(data);
    }

    return (
        <>
            <form ref = {formRef}>
                <h1 style={{textAlign:"center"}}>LoginForm</h1>
                <div className="form-outline mb-4">
                    <input type="text" id="userName" className="form-control"/>
                    <label className="form-label" htmlFor="userName">User name</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control"/>
                    <label className="form-label" htmlFor="password">Password</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="confirmPassword" className="form-control"/>
                    <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="button" id="login" className="form-control btn btn-primary" value="login" onClick={loginHandler}/>
                    <div style={alertStyle} className ="alert alert-primary" role="alert"> The password verification field is not the same as the new password, please try again!</div>
                </div>
            </form>
        
        </>
    );
}