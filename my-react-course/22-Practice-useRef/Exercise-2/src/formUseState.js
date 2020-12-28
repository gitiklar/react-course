import React, { useState } from 'react';

export default function FormUseState() {

    return (
        <form>
            <h1>LoginForm</h1>
            <div className="form-outline mb-4">
                <input type="text" id="userName" className="form-control"/>
                <label className="form-label" htmlFor="userName">User name</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="password" className="form-control"/>
                <label className="form-label" htmlFor="password">Password</label>
            </div>
        </form>
    );
}