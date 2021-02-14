import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setUsername } from './redux/actions';

function mapStateToProps(state) {
  return { username: state.username };
}

export default withRouter(connect(mapStateToProps)(function Login(props) {
  const { username , dispatch , history} = props;

  function handleChange(e) {
    dispatch(setUsername(e.target.value));
  }

  function onClickHandler() {
    if(username.startsWith('a')) {
      history.push('/user');
    }
  }

  return (
    <div>
      <label>
        Please select a user name: 
        <input type="text" value={username} onChange={handleChange} />
        <button type="button" onClick={onClickHandler}>Next</button>
      </label>
      <Link to="/user">Next</Link>
    </div>
  );
}));
