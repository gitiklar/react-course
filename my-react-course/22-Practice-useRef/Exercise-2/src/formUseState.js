import React, { useState } from 'react';

export default function FormUseState({updateData , showSuccessPageHandler , formData, showSuccessPage}) {
    if (showSuccessPage) return false;
    const {userName , password ,confirmPassword } = formData;
    const [displayAlert , setDispalyAlert] = useState("none");
    const alertStyle = { textAlign:"center", borderColor: "#a3c6f8", display : displayAlert,};

    function confirmPasswordIsGood() {
        return password === confirmPassword;
    }

    function loginHandler() {
        confirmPasswordIsGood() && (showSuccessPageHandler() , setDispalyAlert("none"));
        !confirmPasswordIsGood() && setDispalyAlert("block");
    }

    return (
        <>
            <form>
                <h1 style={{textAlign:"center"}}>LoginForm</h1>
                <div className="form-outline mb-4">
                    <input type="text" id="userName" className="form-control" value={userName||''} onInput = {(e)=> updateData(e)}/>
                    <label className="form-label" htmlFor="userName">User name</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control" value={password||''} onInput = {(e)=> updateData(e)}/>
                    <label className="form-label" htmlFor="password">Password</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="confirmPassword" className="form-control" value={confirmPassword||''}  onInput = {(e)=> updateData(e)}/>
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