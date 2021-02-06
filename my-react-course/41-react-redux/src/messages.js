import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        messages: state.messages,
    }
}

export default connect(mapStateToProps)(function Messages(props){
    const { messages } = props;
    
    return (
        <ul>
            {
                messages.map(message=>(
                    <label key={message.id}>
                        Message from : {message.from}
                        <li>{message.text}</li>
                    </label>
                ))
            }
        </ul>
    );
});