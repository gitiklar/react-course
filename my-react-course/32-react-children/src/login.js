import React from 'react';

export function Login({dataObjOfAllPages , updateDataObjOfAllPages}) {

    function handlerInputChange(e) {
      updateDataObjOfAllPages({[e.target.id] : e.target.value});
    }
  
    return (
      <form autoComplete="on">
        <h1>Login Page</h1>
        <div className="form-outline mb-4">
            <label  className="form-label" htmlFor="name">User Name:</label>
            <input className="form-control" type="text" id="name" value={dataObjOfAllPages.name||''} onChange={(e)=>handlerInputChange(e)}/>
        </div>
        <div className="form-outline mb-4">
            <label htmlFor="password">Password:</label>
            <input className="form-control" type="password" id="password" value={dataObjOfAllPages.password||''} onChange={(e)=>handlerInputChange(e)}/>
        </div>
      </form>
    );
  }