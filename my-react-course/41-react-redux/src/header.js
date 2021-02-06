import React from 'react';
import { connect } from 'react-redux';
import { setUserName } from './redux/actions';

function mapStateToProps(state) {
    return {
        username: state.username,
    }
}

export default connect(mapStateToProps)(function Header(props) {
    const { username , dispatch } = props;

    function onInputHandler(e) {
        dispatch(setUserName(e.target.value));
    }

    return (
        <div className="header">
            <label>
                Username:
                <input type="text" value={username} onInput={onInputHandler}/>
            </label>
        </div>
    )
});