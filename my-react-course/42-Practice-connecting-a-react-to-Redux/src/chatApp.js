import React from 'react';
import NewMessageForm , { NewMessageFormContainer } from './newMessageForm';
import IncomingMessages , { IncomingMessagesContainer } from './incomingMessages';


export default function ChatApp() {
    return (
        <div id="messages-page" className="page container">
            <h1> Messages Page </h1>
            <div className="page-content">
                <NewMessageFormContainer>
                        <NewMessageForm/>
                </NewMessageFormContainer>

                <IncomingMessagesContainer>
                        <IncomingMessages/>
                </IncomingMessagesContainer>
            </div>
        </div>
    );
}