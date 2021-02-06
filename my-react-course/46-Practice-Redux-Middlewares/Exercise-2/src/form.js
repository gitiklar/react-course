import React from 'react';
import { connect } from 'react-redux';

import { updateInput , undo, redo} from './redux/action';

function mapStateToProps(state) {
    return { 
        userName: state.userName,
        password: state.password,
    }
}

export default connect(mapStateToProps)(function Form({userName , password , dispatch}){

    function onInputHandler(e) {
        dispatch(updateInput(e.target.id , e.target.value));
    }

    return (
        <form autoComplete="on">
          <h1>Login Page</h1>
          <div className="form-outline mb-4">
              <label className="form-label" htmlFor="userName">User Name:</label>
              <input className="form-control" type="text" id="userName" value={userName} onInput={(e)=>onInputHandler(e)}/>
          </div>
          <div className="form-outline mb-4">
              <label htmlFor="password">Password:</label>
              <input className="form-control" type="password" id="password" value={password} onInput={(e)=>onInputHandler(e)}/>
          </div>
          <button onClick={(e)=>{  e.preventDefault(); dispatch(undo()); }}>Undo</button>
          <button onClick={(e)=>{  e.preventDefault(); dispatch(redo()); }}>Redo</button>
        </form>
      );
});