import React from 'react';
import { connect } from 'react-redux';

import { showMessage } from './redux/actions';

function mapStateToProps(state) {
    return {
       message: state.message,
    }
}

export default connect(mapStateToProps)(function ShowHideMessage({message , dispatch}) {

    function showOrHideMessageHandler() {
        dispatch(showMessage(message? '' : 'Hello world' , 1000));
    }

    return(
        <>
            <h1>Message:</h1>
            <p>{message}</p>
            <button onClick={showOrHideMessageHandler}>Show / hide message</button>
        </>
    );
});