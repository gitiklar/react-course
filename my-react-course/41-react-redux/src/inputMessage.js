import React, { useState } from 'react';
import { connect } from 'react-redux';
import { receivedMessage } from './redux/actions';

function mapStateToProps(state) {
    return {messages: state.messages,}
}

export default connect(mapStateToProps) (function InputMessage(props){
    const { dispatch } = props;
    const [text , setText] = useState('');
    const [name , setName] = useState('');
    const style = { width: '200px', height: '50px', };

    function addMessage() {
        dispatch(receivedMessage({from :name , text: text}));
    }

    return (
        <div>
            <div>
                <input type="text" value={name} onInput={(e)=>setName(e.target.value)} placeholder="Username"/>
            </div>
            <textarea type="text" style={style} value={text} onInput={(e)=>setText(e.target.value)} placeholder="message"/>
            <button onClick={addMessage}>Add message</button>
        </div>
    );
});