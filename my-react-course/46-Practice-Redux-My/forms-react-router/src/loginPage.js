import React from 'react';
import { connect } from 'react-redux';

import { updateDataByID } from './redux/actions';

function mapStateToProps(state) {
    return {
        username: state.formsData.username,
        password: state.formsData.password,
    }
}

export default connect(mapStateToProps)(function Login({username , password , dispatch}) {

    return (
        <form autoComplete="off">
            <h1>Login Page</h1>
            <div className="form-outline mb-4">
                <label  className="form-label" htmlFor="username">User Name:</label>
                <input className="form-control" type="text" id="username" value={username} onInput={(e)=>dispatch(updateDataByID(e))}/>
            </div>
            <div className="form-outline mb-4">
                <label htmlFor="password">Password:</label>
                <input className="form-control" type="password" id="password" value={password} onInput={(e)=>dispatch(updateDataByID(e))}/>
            </div>
      </form>
    );
});