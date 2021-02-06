import React from 'react';
import { connect } from 'react-redux';

import MessagesCount from './messagesCount';
import { deleteMessage } from './redux/actions';

function mapStateToProps(state) {
    return {
        messages: state.messages.messages,
    }
}

export function IncomingMessagesContainer(props) {
    return(
        <div className="right container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <h4>Incoming Messages</h4>
                    <MessagesCount/>
                    {props.children}
                </div>
            </div>
        </div>        
    );
}

export default connect(mapStateToProps)(function IncomingMessages({messages , dispatch}) {

    return (
        <ul className="timeline">
            {messages.map(message=>(
                <li key={message.id} className="public">
                    <span className="from">{message.from} 
                        <button className="btn btn-primary" onClick={()=>dispatch(deleteMessage(message.id))}>Delete</button> 
                    </span>
                    <p>{message.text}</p>
                </li>
            ))}
        </ul>
    );
});