import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

function mapStateToProps(state) {
  return { username: state.username };
}

export default connect(mapStateToProps)(function User(props) {
  const { username } = props;

  if(!username || username.length === 0) {
    return <Redirect to = {{ pathname: "/" , state: {flash:"Missing user name"}}}/>
  }

  return (
    <div>
      <p>Hello {username}</p>
      <Link to="/">Return to login </Link>
    </div>
  );
});

