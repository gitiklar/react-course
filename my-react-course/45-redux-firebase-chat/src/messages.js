import React from 'react';
import { connect } from 'react-redux';
import { writeToFirebase } from './redux/actions';
import { useState } from 'react';

function mapStateToProps(state) {
  return {
    messages: state.messages.messages,
    username: state.account.username,
  }
}

export default connect(mapStateToProps)(function Messages(props) {
  const { messages, username } = props;
  const [message, setMessage] = useState('');

  function sendMessage() {
    writeToFirebase(username , message);
    setMessage('');
  }

  return (
    <>
      <input type="text " value={message} onChange={(e) => setMessage(e.target.value) }/>
      <button onClick={sendMessage}>Send</button>
      <ul>
        {messages.map(msg => (
          <li key={msg.id}>
            <b>{msg.from}</b> {msg.text}
          </li>
        ))}
      </ul>
    </>
  );
});
