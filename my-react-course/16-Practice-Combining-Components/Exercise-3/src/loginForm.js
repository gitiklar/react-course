import React from 'react';

export default function LoginForm({saveMyDataObj , dataObjectOfAllPages}) {
    
    const userName = dataObjectOfAllPages["userName"] || '';
    const password = dataObjectOfAllPages["password"] || '';
    const myDataObj = {};

    function onInputHandler(e) {
        myDataObj[e.target.id] = e.target.value;
        saveMyDataObj(myDataObj);
    }

    return(
        <form>
            <h1>LoginForm</h1>
            <div className="form-outline mb-4">
                <input type="text" id="userName" className="form-control" value = {userName} onInput = {onInputHandler} />
                <label className="form-label" htmlFor="userName">User name</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="password" className="form-control" value={password} onInput = {onInputHandler}/>
                <label className="form-label" htmlFor="password">Password</label>
            </div>
        </form>
    );
}
