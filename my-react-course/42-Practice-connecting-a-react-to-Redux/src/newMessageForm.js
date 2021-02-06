import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setMessage } from './redux/actions';

export function NewMessageFormContainer(props) {
    return (
        <div className="left container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <h4>Send Message</h4>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default connect()(function NewMessageForm({dispatch}) {
    const [from , setFrom] = useState('');
    const [messageText , setMessageText] = useState('');

    function sendMessage(e) {
        e.preventDefault();
        const message = {from: from , text: messageText};
        dispatch(setMessage(message));
    }

    return (
        <form id="new-message-form">
            <div className="form-group">
                <label htmlFor="msg-text" >Message Text:</label>
                <input type="text" id="msg-text" name="message-text" className="form-control"
                value={messageText} onInput={(e)=>setMessageText(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="msg-to">From</label>
                <input type="text" id="msg-to" name="message-to" className="form-control" 
                value={from} onInput={(e)=>setFrom(e.target.value)}/>
            </div>

            <input type="submit" value="Send" className="btn btn-primary" onClick={sendMessage}/>
        </form>   
    );
})
